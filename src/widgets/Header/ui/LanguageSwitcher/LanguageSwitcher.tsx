import { useLang } from "@/app/providers/i18n";
import { setLang } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";
import { EnglishIcon, RussiaIcon } from "@/shared/assets/icons";

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
