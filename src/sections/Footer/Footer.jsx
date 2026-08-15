import { ArrowUpRight, Phone, Globe, MapPin } from "lucide-react";

import logo from "../../assets/logo.png";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ================================
            MAIN
        ================================= */}

        <div className={styles.main}>
          {/* Brand */}

          <div className={styles.brand}>
            <a
              href="/"
              className={styles.logo}
              aria-label="Plot Layout Land home"
            >
              <img src={logo} alt="Plot Layout Land" />
            </a>

            {/* <p>Interactive plot layouts, precisely placed on real maps.</p> */}
          </div>

          {/* Contact */}

          <div className={styles.column}>
            <span className={styles.heading}>CONTACT</span>

            <a href="tel:+919284614144" className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <Phone size={15} />
              </span>

              <span>+91-9284614144</span>
            </a>

            <a
              href="https://www.techgicus.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <span className={styles.contactIcon}>
                <Globe size={15} />
              </span>

              <span>techgicus.com</span>

              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Office */}

          <div className={styles.column}>
            <span className={styles.heading}>OFFICE</span>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <MapPin size={15} />
              </span>

              <span className={styles.address}>
                Office Address
                <small>
                  Plot No. 12, Mitra Vihar Nagar, New Sahakar Nagar, Kharbi,
                  Nagpur, Maharashtra - 440024.
                </small>
              </span>
            </div>
          </div>

          {/* Social */}

          <div className={styles.column}>
            <span className={styles.heading}>FOLLOW US</span>

            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/techgicus/"
                className={styles.social}
                aria-label="Instagram"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/people/Techgicus-software-solutions-pvt-ltd/100086395346471/"
                className={styles.social}
                aria-label="Facebook"
              >
                Facebook
              </a>

              <a
                href="https://www.linkedin.com/company/techgicus-software-solutions-pvt-ltd/"
                className={styles.social}
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* ================================
            PARENT COMPANY
        ================================= */}

        <div className={styles.companyBar}>
          <div className={styles.companyInfo}>
            <span>A PRODUCT BY</span>

            <strong>Techgicus Software Solutions Pvt. Ltd.</strong>
          </div>

          <a
            href="https://www.techgicus.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.companyLink}
          >
            techgicus.com
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* ================================
            COPYRIGHT
        ================================= */}

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Plot Layout Land</span>

          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
