import styles from "./HomePage.module.scss";
import { useTranslate } from "@/app/providers/i18n";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { useEffect, useState } from "react";
import { Button } from "@/shared/ui";

const HomePage = () => {
  const t = useTranslate();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <h1 className={styles.title}>{t("main.hello")}</h1>
        <Button onClick={() => setError(true)}>Error</Button>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
