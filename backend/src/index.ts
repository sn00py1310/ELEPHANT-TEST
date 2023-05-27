import * as express from "express";
import { Request, Response } from "express";

import dotenv = require("dotenv");
import { AppDataSource } from "./data-source";
import { Calendar } from "./entity/Calendar";
import routes from "./routes";
import { LessThan } from "typeorm";
dotenv.config();

const cleanupInterval = Number(process.env.CALENDAR_CLEANUP_INTERVAL ?? 30); //in minutes
const keepTime = Number(process.env.CALENDAR_KEEP_TIME ?? 30); //in days
const PORT = Number(process.env.PORT ?? 3000);
const CALENDAR_LISTING = (process.env.CALENDAR_LISTING ?? "") == "true";

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    clearCalendars();
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// Clear old calendars
async function clearCalendars() {
  let date = new Date();
  date.setDate(date.getDate() - keepTime);

  let oldCalendars = await AppDataSource.getRepository(Calendar).find({
    where: {
      last_access: LessThan(date),
    },
  });

  if (oldCalendars.length !== 0) {
    let oldCalendarIds = oldCalendars.map((c) => c.id);
    console.log(`Remove ${oldCalendarIds.length} old calendars`);
    AppDataSource.getRepository(Calendar).delete(oldCalendarIds);
  }

  setTimeout(clearCalendars, cleanupInterval * 60 * 1000);
}

// create and setup express app
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  // set the CORS policy
  res.header(
    "Access-Control-Allow-Origin",
    process.env.HTTP_Access_Control_Allow_Origin ?? "*"
  );
  // set the CORS headers
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept, Authorization"
  );
  // set the CORS method headers
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, PATCH, DELETE, POST");
    return res.status(200).json({});
  }
  next();
});

app.get("/health/status", async function (req: Request, res: Response) {
  res.status(200).json({"status":"online"});
})

// Show all calendar
app.get("/calendars", async function (req: Request, res: Response) {
  if (!CALENDAR_LISTING) return res.status(403).send();

  const calendars = await AppDataSource.getRepository(Calendar).find();
  res.json(calendars);
});

app.use("/calendar", routes.calendar);
app.use("/cors-proxy", routes.corsProxy);

// start express server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
