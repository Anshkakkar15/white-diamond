import React from "react";

import styles from "@/styles/Layout.module.css";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className={styles.footer_distributed}>
      <div className={`container-fluid `}>
        <div className={styles.footer_rows}>
          <div className={styles.footer_left}>
            <h3>
              Company<span>logo</span>
            </h3>

            <p className={styles.footer_links}>
              <a href="#" className={styles.link_1}>
                Home
              </a>

              <a href="#">About</a>

              <a href="#">Work</a>

              <a href="#">Services</a>

              <a href="#">Contact</a>
            </p>
          </div>

          <div className={styles.footer_center}>
            <div className="d-flex align-items-start gap-3 mb-3">
              <MapPin color="#fff" />
              <p>
                <span>444 S. Cedros Ave</span> Solana Beach, California
              </p>
            </div>

            <div className="d-flex align-items-start gap-3 mb-3">
              <Phone color="#fff" />
              <p>+1.555.555.5555</p>
            </div>

            <div className="d-flex align-items-start gap-3 mb-3">
              <Mail color="#fff" />
              <p>
                <a href="mailto:support@company.com">support@company.com</a>
              </p>
            </div>
          </div>

          <div className={styles.footer_right}>
            <div className={styles.footer_company_about}>
              <span>About the company</span>
              <p>
                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
                euismod convallis velit, eu auctor lacus vehicula sit amet.
              </p>
            </div>

            <div className={styles.footer_icons}>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
