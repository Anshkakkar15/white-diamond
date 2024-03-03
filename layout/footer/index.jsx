import React from "react";

import styles from "@/styles/Layout.module.css";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  TwitterIcon,
} from "lucide-react";

import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.footer_distributed}>
      <div className={`container-fluid `}>
        <div className={styles.footer_rows}>
          <div className={styles.footer_left}>
            <Image
              src={logo}
              alt="Company Logo"
              className={styles.footer_logo}
            />

            <p className={styles.footer_links}>
              <Link href="/" className={styles.link_1}>
                Home
              </Link>

              <Link href="/about">About</Link>

              <Link href="/work">Work</Link>

              <Link href="/contact">Contact</Link>
            </p>
          </div>

          <div className={styles.footer_center}>
            <div className="d-flex align-items-start gap-3 mb-3">
              <MapPin color="#fff" />
              <p>
                <span>Winnipeg, Manitaba</span>
              </p>
            </div>

            <div className="d-flex align-items-start gap-3 mb-3">
              <Phone color="#fff" />
              {/* <p>+1.555.555.5555</p> */}
              <p>
                <a href="tel:2363326530">(236) 332 6530</a>
              </p>
            </div>

            <div className="d-flex align-items-start gap-3 mb-3">
              <Mail color="#fff" />
              <p>
                <a href="mailto:info.whitediamond01@gmail.com">
                  info.whitediamond01@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className={styles.footer_right}>
            <div className={styles.footer_company_about}>
              <span>About the company</span>
              <p>
                Pioneering excellence in construction, we craft a legacy of
                quality and reliability. YOU DREAM IT WE BUILD IT !
              </p>
            </div>

            <div className={styles.footer_icons}>
              <a href="tel:2363326530">
                <Phone />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/white_diamond_renovation/"
              >
                <Instagram />
              </a>
              <a href="mailto:info.whitediamond01@gmail.com">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
