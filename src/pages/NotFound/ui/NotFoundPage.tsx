import { useNavigate } from "react-router-dom";

import { useTranslate } from "@/app/providers";

import { NotFoundIcon } from "@/shared/assets/icons";
import { routePaths } from "@/shared/config";
import { Button } from "@/shared/ui";

import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const t = useTranslate();
  const navigate = useNavigate();

  const handleReloadClick = () => {
    if (window.history.length < 1) {
      navigate(routePaths.home);
      return;
    }
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <NotFoundIcon className={styles.notFoundIcon} />
        <h3 className={styles.title}>{t("notFoundPage.title")}</h3>
        <p className={styles.description}>{t("notFoundPage.description")}</p>
        <Button
          onClick={handleReloadClick}
          theme="primary"
          form="rounded"
          className={styles.button}
        >
          {t("notFoundPage.goBack")}
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
