import {
  LANGS,
  type Lang,
  getLang,
  setLang,
  onLangChange,
} from "./i18n/lang.ts";
import { routePaths, AppRoutes } from "./router/routePaths.ts";
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  type ThemeType,
} from "./theme/ThemeContext.ts";
import { useTheme } from "./theme/useTheme.ts";

export {
  routePaths,
  AppRoutes,
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  LANGS,
  useTheme,
  getLang,
  setLang,
  onLangChange,
  type ThemeType,
  type Lang,
};
