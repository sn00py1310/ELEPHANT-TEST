import * as express from "express";
import { Request, Response } from "express";

import dotenv = require("dotenv");
import { AppDataSource } from "./data-source";
import routes from "./routes";
import { corsHeaders } from "./middleware";
import { clearCalendars } from "./cron";
dotenv.config();

const PORT = Number(process.env.PORT ?? 3000);
const ADMIN_ENABLED = (process.env.ADMIN_ENABLED ?? "") == "true";

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    clearCalendars();
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// create and setup express app
const app = express();
app.use(express.json());
app.use(corsHeaders);

app.get("/health/status", async function (req: Request, res: Response) {
  res.status(200).json({ status: "online" });
});

if (ADMIN_ENABLED) app.use("/admin", routes.admin);
app.use("/calendar", routes.calendar);
app.use("/cors-proxy", routes.corsProxy);

// start express server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
