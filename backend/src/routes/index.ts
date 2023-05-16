import calendar from "./calendar";
import corsProxy from "./cors-proxy";

import { AppDataSource } from "../data-source";
import { Calendar } from "../entity/Calendar";

export default {
  calendar,
  corsProxy,
};

export async function getCalendarById(id: string): Promise<Calendar> {
  const result = await AppDataSource.getRepository(Calendar).findOneBy({
    id: id,
  });
  if (!result) return result;
  AppDataSource.getRepository(Calendar).merge(result, {
    last_access: new Date(),
  });
  await AppDataSource.getRepository(Calendar).save(result);
  return result;
}
