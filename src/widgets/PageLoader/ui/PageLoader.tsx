import styles from "./PageLoader.module.scss";
import { useTranslate } from "@/app/providers";
import { Spinner } from "@/shared/ui";

export const PageLoader = () => {
  const t = useTranslate();
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{t("pageLoader.loading")}</h3>
      <Spinner />
    </div>
  );
};
