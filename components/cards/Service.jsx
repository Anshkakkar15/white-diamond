import React from "react";

import { Hammer } from "lucide-react";
import styles from "@/styles/Home.module.css";

export const ServiceCard = () => {
  return (
    <div className={styles.card__bx}>
      <div className={styles.card__data}>
        <div className={styles.card__icon}>
          <Hammer />
        </div>
        <div className={styles.card__content}>
          <h3>Designing</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};
