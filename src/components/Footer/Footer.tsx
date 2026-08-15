import Image from "next/image";
import Link from "next/link";
import { footerAboutLinks, footerQuickLinks, footerNeuroLxpLinks } from "@/data/navigation";
import { SparkleIcon, MailIcon, FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/icons/Icons";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FooterAboutLink from "@/components/Footer/FooterAboutLink";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["nlxp-footer"]}>
      <ScrollToTopButton />
      <div className={styles["nlxp-footer-inner"]}>
        <div className={styles["nlxp-footer-top"]}>
          <div className={styles["nlxp-footer-brand"]}>
            <div className={styles["nlxp-footer-brand-top"]}>
              <Image src="/images/logo_01_synapse_spark.webp" alt="NeuroLXP" width={299} height={112} className={styles["nlxp-footer-logo"]} />
              <div className={styles["nlxp-footer-tagline"]}>
                <span className={styles["nlxp-footer-tagline-text"]}>One Platform</span>
                <SparkleIcon className={styles["nlxp-footer-sparkle"]} />
                <span className={styles["nlxp-footer-tagline-text"]}>Endless Learning</span>
                <SparkleIcon className={styles["nlxp-footer-sparkle"]} />
                <span className={styles["nlxp-footer-tagline-text"]}>Limitless Growth</span>
              </div>
            </div>
            <div className={styles["nlxp-footer-company"]}>
              <p className={styles["nlxp-footer-company-name"]}>Prgeeq Global Solutions Private Limited</p>
              <p className={styles["nlxp-footer-address"]}>
                Prestige Atlanta, 10/12, 80 Feet Rd, 1A Block,
                <br />
                Koramangala, Bengaluru, - 560034
                <br />
                Karnataka, India.
              </p>
            </div>
          </div>

          <div className={styles["nlxp-footer-right"]}>
            <div className={styles["nlxp-footer-columns"]}>
              <div className={styles["nlxp-footer-column"]}>
                <h3 className={styles["nlxp-footer-heading"]}>About us</h3>
                <ul className={styles["nlxp-footer-list"]}>
                  {footerAboutLinks.map((link) => (
                    <li key={link.label}>
                      <FooterAboutLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles["nlxp-footer-column"]}>
                <h3 className={styles["nlxp-footer-heading"]}>Quick Links</h3>
                <ul className={styles["nlxp-footer-list"]}>
                  {footerQuickLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles["nlxp-footer-link"]}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles["nlxp-footer-column"]}>
                <h3 className={styles["nlxp-footer-heading"]}>
                  NeuroLXP<sup className={styles["nlxp-footer-heading-tm"]}>TM</sup>
                </h3>
                <ul className={styles["nlxp-footer-list"]}>
                  {footerNeuroLxpLinks.map((link) => (
                    <li key={link.label}>
                      <FooterAboutLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles["nlxp-footer-social"]}>
              <a href="mailto:info@neurolxp.com" className={`${styles["nlxp-footer-social-icon"]} ${styles["nlxp-footer-social-icon--mail"]}`} aria-label="Email">
                <MailIcon className={styles["nlxp-footer-social-svg"]} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${styles["nlxp-footer-social-icon"]} ${styles["nlxp-footer-social-icon--facebook"]}`} aria-label="Facebook">
                <FacebookIcon className={styles["nlxp-footer-social-svg"]} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${styles["nlxp-footer-social-icon"]} ${styles["nlxp-footer-social-icon--instagram"]}`} aria-label="Instagram">
                <InstagramIcon className={styles["nlxp-footer-social-svg"]} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`${styles["nlxp-footer-social-icon"]} ${styles["nlxp-footer-social-icon--youtube"]}`} aria-label="YouTube">
                <YoutubeIcon className={styles["nlxp-footer-social-svg"]} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${styles["nlxp-footer-social-icon"]} ${styles["nlxp-footer-social-icon--linkedin"]}`} aria-label="LinkedIn">
                <LinkedinIcon className={styles["nlxp-footer-social-svg"]} />
              </a>
            </div>
          </div>
        </div>

        <p className={styles["nlxp-footer-copyright"]}>Copyright @2026 | Prgeeq Global Solutions Pvt Ltd | All right reserved</p>
      </div>
    </footer>
  );
}
