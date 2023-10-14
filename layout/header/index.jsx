"use client";
import React, { useState } from "react";

import styles from "@/styles/Layout.module.css";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.grad_bar}></div>
      <nav className={styles.navigationbar}>
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
          alt="Company Logo"
        /> */}
        <h2>Logo</h2>
        <div
          onClick={() => setIsActive(!isActive)}
          className={`${styles.menu_toggle} ${
            isActive ? styles.is_active : null
          }`}
          id={styles.mobile_menu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={`nav ${isActive ? styles.nav_active : null}`}>
          <li className={styles.nav_items}>
            <a href="#">Home</a>
          </li>
          <li className={styles.nav_items}>
            <a href="#">About</a>
          </li>
          <li className={styles.nav_items}>
            <a href="#">Work</a>
          </li>
          <li className={styles.nav_items}>
            <a href="#">Careers</a>
          </li>
          <li className={styles.nav_items}>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
