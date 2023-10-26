import React from "react";

import { Map } from "@/components/pages/contact/Map";

import styles from "@/styles/Contact.module.css";
import { Banner } from "@/components/Banner";

export default function Contact() {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Banner heading={"Contact Us"} />
      <div data-aos="fade-right" class="container-fluid">
        <div class={styles.screen}>
          <div class={styles.screen_body}>
            <div class={`${styles.screen_body_item} ${styles.left}`}>
              <div class={styles.app_title}>
                <span>CONTACT US</span>
              </div>
            </div>
            <div class={styles.screen_body_item}>
              <div class={styles.app_form}>
                <div class={styles.app_form_group}>
                  <input class={styles.app_form_control} placeholder="NAME" />
                </div>
                <div class={styles.app_form_group}>
                  <input class={styles.app_form_control} placeholder="EMAIL" />
                </div>
                <div class={styles.app_form_group}>
                  <input
                    class={styles.app_form_control}
                    placeholder="CONTACT NO"
                  />
                </div>
                <div class={`${styles.app_form_group} ${styles.message}`}>
                  <input
                    class={styles.app_form_control}
                    placeholder="MESSAGE"
                  />
                </div>
                <div class={`${styles.app_form_group} ${styles.buttons}`}>
                  <button class={styles.app_form_button}>SEND</button>
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
