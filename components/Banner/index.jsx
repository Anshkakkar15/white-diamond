import React from "react";
import Image from "next/image";

import bannerImg from "@/assets/inner_banner.svg";
import styles from "@/styles/Banner.module.css";
import brick from "@/assets/brick.svg";
import compass from "@/assets/compass.svg";

export const Banner = ({ heading }) => {
  return (
    <div className={styles.banner}>
      <Image src={bannerImg} className={styles.banner_back_Img} />

      <div className={styles.banner_head}>
        <div className={styles.sideImg}>
          <Image src={brick} />
        </div>
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-center">
          {heading}
        </h1>
        <div className={styles.sideImg}>
          <Image src={compass} />
        </div>
      </div>
    </div>
  );
};
