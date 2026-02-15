import { useLang } from "@/app/providers/i18n";

import { EnglishIcon, RussiaIcon } from "@/shared/assets/icons";
import { setLang } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";

export const LanguageSwitcher = () => {
  const lang = useLang();
  const toggleLang = () => {
    setLang(lang === "en" ? "ru" : "en");
  };
  return (
    <Button theme="ghost" onClick={toggleLang}>
      {lang === "en" ? (
        <AppIcon Icon={EnglishIcon} />
      ) : (
        <AppIcon Icon={RussiaIcon} />
      )}
    </Button>
  );
};
