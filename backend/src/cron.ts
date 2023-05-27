import { LessThan } from "typeorm";
import { AppDataSource } from "./data-source";
import { Calendar } from "./entity/Calendar";

const cleanupInterval = Number(process.env.CALENDAR_CLEANUP_INTERVAL ?? 30); //in minutes
const keepTime = Number(process.env.CALENDAR_KEEP_TIME ?? 30); //in days

// Clear old calendars
export async function clearCalendars() {
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
