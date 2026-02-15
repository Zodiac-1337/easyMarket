import { useNavigate } from "react-router-dom";

import { useTranslate } from "@/app/providers";

import {
  LogoIcon,
  MapPinIcon,
  SearchIcon,
  UsersIcon,
  ShoppingCartIcon,
} from "@/shared/assets/icons";
import { routePaths } from "@/shared/config";
import { AppIcon, Button, Input } from "@/shared/ui";

import styles from "./Header.module.scss";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher.tsx";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher.tsx";

export const Header = () => {
  const navigate = useNavigate();
  const t = useTranslate();
  const handleLoginClick = () => {
    navigate(routePaths.login);
  };
  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <LogoIcon className={styles.logo} />
        <Button theme="ghost">
          <AppIcon Icon={MapPinIcon} />
          <span>Южно-Сахалинск</span>
        </Button>
      </div>
      <div className={styles.section}>
        <Input
          rounded
          placeholder={t("header.searchBy")}
          Icon={<AppIcon size={18} Icon={SearchIcon} theme="background" />}
        />
      </div>
      <div className={styles.section}>
        <Button theme="secondary">
          <span>
            <AppIcon size={18} Icon={ShoppingCartIcon} theme="clean" />
            <span>14</span>
          </span>
          <span>{t("header.cart")}</span>
        </Button>

        <Button onClick={handleLoginClick} theme="outline">
          <AppIcon Icon={UsersIcon} />
          <span>{t("header.login")}</span>
        </Button>

        <ThemeSwitcher />

        <LanguageSwitcher />
      </div>
    </header>
  );
};
