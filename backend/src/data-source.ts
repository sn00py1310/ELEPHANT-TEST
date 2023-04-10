import "reflect-metadata";
import { DataSource } from "typeorm";
import { Calendar } from "./entity/Calendar";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./data/database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Calendar],
  migrations: [],
  subscribers: [],
});
