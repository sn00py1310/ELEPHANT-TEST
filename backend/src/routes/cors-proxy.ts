import { Request, Response, Router } from "express";
import { checkUrl } from ".";
import fetch from "node-fetch";

const router = Router();
export default router;

router.get("/", async function (req: Request, res: Response) {
  if (req.query.url === undefined) {
    res.status(404).send();
    return;
  }
  if (typeof req.query.url !== "string") {
    res.status(400).send();
    return;
  }


  let url = req.params.url;
  if (!checkUrl(url)) {
    res.status(403).send();
    return;
  }

  // TODO request and send response
  const tmp = await fetch(url);
  const body = await tmp.text();
  
//   res.set("Content-Type", tmp.headers.get("content-type"));
  res.set("content-type", "text/plain");
  res.status(tmp.status).send(body);
});
