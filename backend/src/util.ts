import { Calendar, Settings, SimpleReplacement } from "./entity/Calendar";

export function removeBadRegEx(calendar: Calendar): Calendar {
  for (let i = 0; i < calendar.settings.replacements.length; i++) {
    if (
      calendar.settings.replacements[i].mode === "globalRegex" &&
      calendar.settings.replacements[i].pattern.toString() === "(?:)" &&
      calendar.settings.replacements[i].replacement === ""
    ) {
      calendar.settings.replacements.splice(i, 1);
      i--; //decrement to don't skip replacements
    }
  }
  return calendar;
}
