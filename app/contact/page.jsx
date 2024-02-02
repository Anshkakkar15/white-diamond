"use client";
import React, { useState } from "react";

import { Map } from "@/components/pages/contact/Map";

import styles from "@/styles/Contact.module.css";
import { Banner } from "@/components/Banner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contactNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
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
              <form onSubmit={handleSubmit} className={styles.app_form}>
                <div className={styles.app_form_group}>
                  <input
                    className={styles.app_form_control}
                    placeholder="Name"
                    type="text"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    required
                  />
                </div>
                <div className={styles.app_form_group}>
                  <input
                    className={styles.app_form_control}
                    placeholder="Email"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    required
                  />
                </div>
                <div className={styles.app_form_group}>
                  <input
                    className={styles.app_form_control}
                    placeholder="Contact No"
                    type="number"
                    onChange={handleChange}
                    name="contactNo"
                    value={formData.contactNo}
                    required
                  />
                </div>
                <div className={`${styles.app_form_group} ${styles.message}`}>
                  <textarea
                    className={styles.app_form_control}
                    placeholder="message"
                    type="text"
                    onChange={handleChange}
                    name="Message"
                    value={formData.message}
                    required
                  />
                </div>
                <div className={`${styles.app_form_group} ${styles.buttons}`}>
                  <input
                    type="submit"
                    value="Submit"
                    className={styles.app_form_button}
                  />
                </div>
              </form>
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
