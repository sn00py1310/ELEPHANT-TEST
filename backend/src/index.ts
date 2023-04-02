import * as express from "express";
import { Request, Response } from "express";

import dotenv = require("dotenv");
import { AppDataSource } from "./data-source";
import { Calendar } from "./entity/Calendar";
import routes from "./routes";
dotenv.config();

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

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

// Show all calendar
app.get("/calendars", async function (req: Request, res: Response) {
  const calendars = await AppDataSource.getRepository(Calendar).find();
  res.json(calendars);
});





app.use("/calendar", routes.calendar);
app.use("/cors-proxy", routes.corsProxy);



// start express server
const PORT: any = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
