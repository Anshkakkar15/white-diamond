import React from "react";

import { Hammer } from "lucide-react";
import styles from "@/styles/Home.module.css";

export const ServiceCard = ({ service }) => {
  return (
    <div data-aos="zoom-in" className={styles.card__bx}>
      <div className={styles.card__data}>
        <div className={styles.card__icon}>{service?.icon}</div>
        <div className={styles.card__content}>
          <h3>{service?.heading}</h3>
          <p>{service?.description}</p>
        </div>
      </div>
    </div>
  );
};
