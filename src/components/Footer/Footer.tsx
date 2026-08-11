import Image from "next/image";
import Link from "next/link";
import { footerAboutLinks, footerQuickLinks, footerNeuroLxpLinks } from "@/data/navigation";
import { SparkleIcon, MailIcon, FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/icons/Icons";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FooterAboutLink from "@/components/Footer/FooterAboutLink";

export default function Footer() {
  return (
    <footer className="nlxp-footer">
      <ScrollToTopButton />
      <div className="nlxp-footer-inner">
        <div className="nlxp-footer-top">
          <div className="nlxp-footer-brand">
            <div className="nlxp-footer-brand-top">
              <Image src="/images/logo_01_synapse_spark.png" alt="NeuroLXP" width={299} height={112} className="nlxp-footer-logo" />
              <div className="nlxp-footer-tagline">
                <span className="nlxp-footer-tagline-text">One Platform</span>
                <SparkleIcon className="nlxp-footer-sparkle" />
                <span className="nlxp-footer-tagline-text">Endless Learning</span>
                <SparkleIcon className="nlxp-footer-sparkle" />
                <span className="nlxp-footer-tagline-text">Limitless Growth</span>
              </div>
            </div>
            <div className="nlxp-footer-company">
              <p className="nlxp-footer-company-name">Prgeeq Global Solutions Private Limited</p>
              <p className="nlxp-footer-address">
                Prestige Atlanta, 10/12, 80 Feet Rd, 1A Block,
                <br />
                Koramangala, Bengaluru, - 560034
                <br />
                Karnataka, India.
              </p>
            </div>
          </div>

          <div className="nlxp-footer-right">
            <div className="nlxp-footer-columns">
              <div className="nlxp-footer-column">
                <h3 className="nlxp-footer-heading">About us</h3>
                <ul className="nlxp-footer-list">
                  {footerAboutLinks.map((link) => (
                    <li key={link.label}>
                      <FooterAboutLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nlxp-footer-column">
                <h3 className="nlxp-footer-heading">Quick Links</h3>
                <ul className="nlxp-footer-list">
                  {footerQuickLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="nlxp-footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nlxp-footer-column">
                <h3 className="nlxp-footer-heading">
                  NeuroLXP<sup className="nlxp-footer-heading-tm">TM</sup>
                </h3>
                <ul className="nlxp-footer-list">
                  {footerNeuroLxpLinks.map((link) => (
                    <li key={link.label}>
                      <FooterAboutLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="nlxp-footer-social">
              <a href="mailto:info@neurolxp.com" className="nlxp-footer-social-icon nlxp-footer-social-icon--mail" aria-label="Email">
                <MailIcon className="nlxp-footer-social-svg" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nlxp-footer-social-icon nlxp-footer-social-icon--facebook" aria-label="Facebook">
                <FacebookIcon className="nlxp-footer-social-svg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nlxp-footer-social-icon nlxp-footer-social-icon--instagram" aria-label="Instagram">
                <InstagramIcon className="nlxp-footer-social-svg" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="nlxp-footer-social-icon nlxp-footer-social-icon--youtube" aria-label="YouTube">
                <YoutubeIcon className="nlxp-footer-social-svg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nlxp-footer-social-icon nlxp-footer-social-icon--linkedin" aria-label="LinkedIn">
                <LinkedinIcon className="nlxp-footer-social-svg" />
              </a>
            </div>
          </div>
        </div>

        <p className="nlxp-footer-copyright">Copyright @2026 | Prgeeq Global Solutions Pvt Ltd | All right reserved</p>
      </div>
    </footer>
  );
}