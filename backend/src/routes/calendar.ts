import { Request, Response, Router } from "express";
import fetch from "node-fetch";
import { checkUrl, getCalendarById } from ".";
import { AppDataSource } from "../data-source";
import { Calendar } from "../entity/Calendar";

const router = Router();
export default router;

router.post("/", async function (req: Request, res: Response) {
  if (!checkUrl(req.body.url)) {
    res.status(400).send();
    return;
  }

  const calendar = AppDataSource.getRepository(Calendar).create(req.body);
  const results = await AppDataSource.getRepository(Calendar).save(calendar);
  return res.send(results);
});

router.delete("/:id", async function (req: Request, res: Response) {
  const results = await AppDataSource.getRepository(Calendar).delete(
    req.params.id
  );

  if (results === null) res.status(404);
  return res.send(results);
});

router.get("/:id/settings", async function (req: Request, res: Response) {
  const results = await getCalendarById(req.params.id);
  if (results === null) res.status(404);
  return res.send(results);
});

router.put("/:id/settings", async function (req: Request, res: Response) {
  const calendar = await getCalendarById(req.params.id);
  AppDataSource.getRepository(Calendar).merge(calendar, req.body);

  if (!checkUrl(calendar.url)) {
    res.status(400).send();
    return;
  }

  const results = await AppDataSource.getRepository(Calendar).save(calendar);

  if (results === null) res.status(404).send();
  return res.send(results);
});

function calendarTimeout(req: Request, res: Response){
  console.warn("Connection timeout");
  res.status(408).send();
}

router.get("/:id", async function (req: Request, res: Response) {
  res.setTimeout(Number(process.env.REGEX_TIMEOUT) ?? 30000, function(){
      calendarTimeout(req, res);
    });
  
  const calendar = await getCalendarById(req.params.id);

  if (calendar === null) {
    res.status(404).send();
    return;
  }
  if (!checkUrl(calendar.url)) {
    res.status(400).send();
    return;
  }


  const data = await fetch(calendar.url.toString());
  let calString = await data.text();

  // Change u+000d u+000a to u+000a -> remove carriage return
  // Also remove "/"", who needs is anyways...
  calString = calString.replace(/\r/g, "").replace(/\\/g, "");


  calendar.settings.replacements.forEach(replacement => {
    try {
      let reg = RegExp(replacement.pattern, "g");
      calString = calString.replace(reg, replacement.replacement);
    } catch (error) {
      console.warn("ignore regex error...");
    }
  });

  let customType = data.headers.get("Content-Type") ?? "text/plain";
  if (req.query["content-type"] && typeof req.query["content-type"] === "string"){
    customType = req.query["content-type"]; 
  }

  res.set("content-type", customType);
  res.send(calString);
});
