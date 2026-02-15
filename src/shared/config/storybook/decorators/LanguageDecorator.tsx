import type { Decorator } from "@storybook/react-vite";

import { I18nProvider } from "@/app/providers/i18n";

import { getLang, type Lang, setLang } from "@/shared/config";

export const LanguageDecorator: Decorator = (Story, context) => {
  const locale = (context.globals.locale ?? "en") as Lang;

  if (getLang() !== locale) setLang(locale);

  return (
    <I18nProvider>
      <Story />
    </I18nProvider>
  );
};
