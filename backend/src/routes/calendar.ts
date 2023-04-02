import { Request, Response, Router } from "express";
import fetch from "node-fetch";
import { checkUrl, getCalendarById } from ".";
import { AppDataSource } from "../data-source";
import { Calendar } from "../entity/Calendar";

const router = Router();
export default router;

router.post("/", async function (req: Request, res: Response) {
  console.log(req.body);

  if (!checkUrl(req.body.url)) {
    res.status(400).send();
    return;
  }

  const calendar = AppDataSource.getRepository(Calendar).create(req.body);
  const results = await AppDataSource.getRepository(Calendar).save(calendar);
  console.log(calendar);
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

router.get("/:id", async function (req: Request, res: Response) {
  const calendar = await getCalendarById(req.params.id);
  // TODO fetch an regex calendar

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

  res.set("content-type", "text/plain");
  res.send(calString);
});
