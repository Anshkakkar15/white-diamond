import React from "react";

import { Map } from "@/components/pages/contact/Map";

import styles from "@/styles/Contact.module.css";
import { Banner } from "@/components/Banner";

export default function Contact() {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Banner heading={"Contact Us"} />
      <div data-aos="fade-right" className="container-fluid">
        <div className={styles.screen}>
          <div className={styles.screen_body}>
            <div className={`${styles.screen_body_item} ${styles.left}`}>
              <div className={styles.app_title}>
                <span>CONTACT US</span>
              </div>
            </div>
            <div className={styles.screen_body_item}>
              <div className={styles.app_form}>
                <div className={styles.app_form_group}>
                  <input
                    className={styles.app_form_control}
                    placeholder="NAME"
                  />
                </div>
                <div className={styles.app_form_group}>
                  <input
                    className={styles.app_form_control}
                    placeholder="EMAIL"
                  />
                </div>
                <div className={styles.app_form_group}>
                  <input
                    className={styles.app_form_control}
                    placeholder="CONTACT NO"
                  />
                </div>
                <div className={`${styles.app_form_group} ${styles.message}`}>
                  <input
                    className={styles.app_form_control}
                    placeholder="MESSAGE"
                  />
                </div>
                <div className={`${styles.app_form_group} ${styles.buttons}`}>
                  <button className={styles.app_form_button}>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.map_sec}>
        <Map styles={styles} />
      </section>
    </div>
  );
}
