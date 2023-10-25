import React from "react";

import { Map } from "@/components/pages/contact/Map";

import styles from "@/styles/Contact.module.css";
import { Banner } from "@/components/Banner";

export default function Contact() {
  return (
    <>
      <div>
        <Banner heading={"Contact Us"} />
      </div>

      <section className={styles.map_sec}>
        <Map styles={styles} />
      </section>
    </>
  );
}
