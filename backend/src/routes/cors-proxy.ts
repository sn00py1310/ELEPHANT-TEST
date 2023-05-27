import { Request, Response, Router } from "express";
import { checkUrl } from "../util";
import fetch from "node-fetch";

const router = Router();
export default router;

router.get("/", async function (req: Request, res: Response) {
  if (!req.query.url) return res.status(404).send();
  if (typeof req.query.url !== "string") return res.status(400).send();

  let url = req.query.url;
  if (!checkUrl(url)) return res.status(403).send();

  const calResponse = await fetch(url);
  const body = await calResponse.text();

  let customType = calResponse.headers.get("Content-Type") ?? "text/plain";
  if (req.query["content-type"] && typeof req.query["content-type"] === "string"){
    customType = req.query["content-type"]; 
  }
  
  res.set("Content-Type", customType);
  res.status(calResponse.status).send(body);
});
