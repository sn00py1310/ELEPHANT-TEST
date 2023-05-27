import calendar from "./calendar";
import corsProxy from "./cors-proxy";

import { AppDataSource } from "../data-source";
import { Calendar } from "../entity/Calendar";

export default {
  calendar,
  corsProxy,
};

export async function getCalendarById(id: string): Promise<Calendar | null> {
  const calendar = await AppDataSource.getRepository(Calendar).findOneBy({
    id: id,
  });
  if (!calendar) return calendar;

  await updateCalendarLastAccess(calendar);
  return calendar;
}


export async function updateCalendarLastAccess(calendar: Calendar): Promise<void> {
  calendar.last_access = new Date();
  await AppDataSource.getRepository(Calendar).save(calendar);
}