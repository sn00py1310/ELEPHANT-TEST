import { Request, Response, Router } from "express";
import { AppDataSource } from "../data-source";
import { Calendar } from "../entity/Calendar";

const router = Router();
export default router;

// Show all calendar
router.get("/calendars", async function (req: Request, res: Response) {
  const calendars = await AppDataSource.getRepository(Calendar).find();
  res.json(calendars);
});
