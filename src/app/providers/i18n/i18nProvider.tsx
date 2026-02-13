import type { ReactNode } from "react";
import { useEffect } from "react";
import { loadCoreDict } from "@/shared/i18n";

export function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    void loadCoreDict();
  }, []);

  return <>{children}</>;
}
