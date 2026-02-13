import { getLang, onLangChange, type Lang } from "@/shared/config/i18n/lang";
import type { CoreVocab } from "./en";

type Loader = () => Promise<{ vocab: CoreVocab }>;

const loaders: Record<Lang, Loader> = {
  en: () => import("./en"),
  ru: () => import("./ru"),
};

let dict: CoreVocab | null = null;
const listeners = new Set<() => void>();

export const getCoreDict = () => dict;

export const onCoreDictChange = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

export const loadCoreDict = async () => {
  const { vocab } = await loaders[getLang()]();
  dict = vocab;
  listeners.forEach((l) => l());
};

onLangChange(() => {
  void loadCoreDict();
});

export type { CoreVocab };
