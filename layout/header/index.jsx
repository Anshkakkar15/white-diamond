"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "@/styles/Layout.module.css";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.addEventListener("mousedown", () => setIsActive(false));
      document.body.style.overflowY = "hidden";
    } else return;

    return () => {
      document.body.removeEventListener("mousedown", () => setIsActive(false));
      document.body.style.overflowY = "auto";
    };
  }, [isActive]);

  return (
    <div className={`${styles.nav_wrapper}`}>
      <div className="container-fluid">
        <div className={styles.grad_bar}></div>
        <div className={styles.navigationbar}>
          {/* <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
          alt="Company Logo"
        /> */}
          <h2>Logo</h2>
          <div
            onClick={() => setIsActive(true)}
            className={`${styles.menu_toggle}`}
          >
            <Menu color="#fff" />
          </div>
          <ul className={`nav ${isActive ? styles.nav_active : null}`}>
            <li onClick={() => setIsActive(false)} className={styles.cross}>
              <X color="#BCBCBC" />
            </li>
            <li className={styles.nav_items}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.nav_items}>
              <Link href="#">About</Link>
            </li>
            <li className={styles.nav_items}>
              <Link href="#">Work</Link>
            </li>
            <li className={styles.nav_items}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
