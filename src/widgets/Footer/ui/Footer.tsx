import { useTranslate } from "@/app/providers";
import styles from "./Footer.module.scss";
import { LogoIcon } from "@/shared/assets/icons";
import { Link } from "react-router";

export const Footer = () => {
  const t = useTranslate();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <LogoIcon className={styles.logo} />

        <div className={styles.links}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.about.title")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to="/aboutAs">
                  {t("footer.about.aboutUs")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/ourBranches">
                  {t("footer.about.branches")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/chengelog">
                  {t("footer.about.changelog")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              {t("footer.quickLinks.title")}
            </h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to="/faqs">
                  {t("footer.quickLinks.faqs")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/recipes">
                  {t("footer.quickLinks.recipes")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/coctactUs">
                  {t("footer.quickLinks.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.help.title")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to="/termsOfPrivacy">
                  {t("footer.help.terms")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/privacyPolicy">
                  {t("footer.help.privacy")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/security">
                  {t("footer.help.security")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.company.title")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to="/blog">
                  {t("footer.company.blog")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/contact">
                  {t("footer.company.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("footer.social.title")}</h3>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} to="/facebook">
                  {t("footer.social.facebook")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/instagram">
                  {t("footer.social.instagram")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/twitter">
                  {t("footer.social.twitter")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>{t("footer.copyright")}</div>
    </footer>
  );
};
