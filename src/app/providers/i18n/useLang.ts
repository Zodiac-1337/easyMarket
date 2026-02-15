import { useSyncExternalStore } from "react";

import { getLang, onLangChange } from "@/shared/config/i18n/lang";

export const useLang = () =>
  useSyncExternalStore((cb) => onLangChange(cb), getLang, getLang);
