import { cookie } from "@/shared/lib/cookie";

export const LANGS = { en: "en", ru: "ru" } as const;
export type Lang = keyof typeof LANGS;

const detect = (): Lang => {
  const fromCookie = cookie.get("lang");
  const nav = (navigator.language || "en").slice(0, 2);
  const candidate = (fromCookie ?? nav) as Lang;
  return candidate in LANGS ? candidate : "en";
};

let current: Lang = detect();
const subs = new Set<(l: Lang) => void>();

export const getLang = () => current;

export const onLangChange = (cb: (l: Lang) => void) => {
  subs.add(cb);
  return () => subs.delete(cb);
};

export const setLang = (lang: Lang) => {
  if (lang === current) return;
  cookie.set("lang", lang);
  current = lang;
  subs.forEach((fn) => fn(lang));
};
