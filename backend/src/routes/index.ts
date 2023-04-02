import calendar from "./calendar";
import corsProxy from "./cors-proxy";

import { AppDataSource } from "../data-source";
import { Calendar } from "../entity/Calendar";
import { Url } from "url";

export default {
  calendar,
  corsProxy,
};

export function checkUrl(input: string | URL): boolean {
  let url: URL;
  try {
    url = new URL(input.toString());
  } catch (error: any) {
    return false;
  }

  if (url.protocol != "https:") return false;
  if (url.host != "campus.kit.edu") return false;
  if (!url.pathname.startsWith("/sp/webcal/")) return false;

  return true;
}

export async function getCalendarById(id: string): Promise<Calendar> {
  const result = await AppDataSource.getRepository(Calendar).findOneBy({
    id: id,
  });
  AppDataSource.getRepository(Calendar).merge(result, {
    last_access: new Date(),
  });
  await AppDataSource.getRepository(Calendar).save(result);
  return result;
}
