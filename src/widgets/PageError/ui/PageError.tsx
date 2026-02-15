import { useTranslate } from "@/app/providers";

import { PageErrorIcon } from "@/shared/assets/icons";
import { Button } from "@/shared/ui";

import styles from "./PageError.module.scss";

export const PageError = () => {
  const t = useTranslate();

  const handleReloadClick = () => {
    location.reload();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <PageErrorIcon className={styles.errorIcon} />
        <h3 className={styles.title}>{t("pageError.title")}</h3>
        <p className={styles.description}>{t("pageError.description")}</p>
        <Button
          onClick={handleReloadClick}
          theme="primary"
          form="rounded"
          className={styles.button}
        >
          {t("pageError.reload")}
        </Button>
      </div>
    </div>
  );
};
