import { useSyncExternalStore } from "react";
import { getCoreDict, onCoreDictChange } from "@/shared/i18n";
import type { CoreVocab } from "@/shared/i18n";
import type { KeyPaths } from "@/shared/i18n/core/keyPaths";
import { getByPath } from "@/shared/i18n/core/getByPath";

type Key = KeyPaths<CoreVocab>;

export const useTranslate = () => {
  const dict = useSyncExternalStore(onCoreDictChange, getCoreDict, getCoreDict);

  return (key: Key): string => {
    if (!dict) return key;
    const v = getByPath(dict, key);
    return typeof v === "string" ? v : key;
  };
};
