import "reflect-metadata";
import { DataSource } from "typeorm";
import { Calendar } from "./entity/Calendar";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Calendar],
  migrations: [],
  subscribers: [],
});
