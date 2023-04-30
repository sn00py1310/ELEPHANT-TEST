import { Calendar } from "./entity/Calendar";

export function replacer(calString: string, calendar: Calendar): string {
  // Change u+000d u+000a to u+000a -> remove carriage return
  // Also remove "/"", who needs is anyways...
  calString = calString.replace(/\r/g, "").replace(/\\/g, "");

  calendar.settings.replacements.forEach((replacement) => {
    try {
      let reg = RegExp(replacement.pattern, "g");
      calString = calString.replace(reg, replacement.replacement);
    } catch (error) {
      console.warn("ignore regex error...");
    }
  });

  return calString;
}
