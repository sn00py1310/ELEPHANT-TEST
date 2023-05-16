import { Settings, SimpleReplacement } from "./entity/Calendar";

const badRegex = new SimpleReplacement();
badRegex.mode = "globalRegex";
badRegex.pattern = "(?:)"
badRegex.replacement = "";

export function removeBadRegEx(settings: Settings): Settings {
  for (let i = 0; i < settings.replacements.length; i++) {
    if (deepIsEqual(settings.replacements[i], badRegex)) {
      settings.replacements.splice(i, 1);
      i--; //decrement to don't skip replacements
    }
  }
  return settings;
}



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

// https://stackoverflow.com/a/52645018
const deepIsEqual = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => deepIsEqual(a[k], b[k]));
};