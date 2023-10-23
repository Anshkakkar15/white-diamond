import React from "react";

import { Map } from "@/components/pages/contact/Map";

import styles from "@/styles/Contact.module.css";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className={styles.contact_us}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className={styles.contact_inner}>
                <div className="row">
                  <div className="col-lg-10">
                    <div className={styles.contact_form_inner}>
                      <div className={styles.contact_field}>
                        <h3>Contact Us</h3>
                        <p>
                          Feel Free to contact us any time. We will get back to
                          you as soon as we can!.
                        </p>
                        <input
                          type="text"
                          className={`${styles.form_control} form-control form-group`}
                          placeholder="Name"
                        />
                        <input
                          type="email"
                          className={`${styles.form_control} form-control form-group`}
                          placeholder="Email"
                        />
                        <input
                          type="number"
                          className={`${styles.form_control} form-control form-group`}
                          placeholder="Contact no"
                        />
                        <textarea
                          className={`${styles.form_control} form-control form-group`}
                          placeholder="Message"
                        ></textarea>
                        <button className={styles.contact_form_submit}>
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div
                      className={`${styles.right_conatct_social_icon} d-flex align-items-end`}
                    >
                      <div className={`${styles.socil_item_inner} d-flex`}>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-square"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.contact_info_sec}>
                  <h4>Contact Info</h4>
                  <div
                    className={`d-flex ${styles.info_single} align-items-center`}
                  >
                    <Phone color="#fff" />
                    <span>+91 8009 054294</span>
                  </div>
                  <div
                    className={`d-flex ${styles.info_single} align-items-center`}
                  >
                    <Mail color="#fff" />
                    <span>info@construction.com</span>
                  </div>
                  <div
                    className={`d-flex ${styles.info_single} align-items-center`}
                  >
                    <MapPin color="#fff" />
                    <span>House construction company in canada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.map_sec}>
        <Map styles={styles} />
      </section>
    </>
  );
}
