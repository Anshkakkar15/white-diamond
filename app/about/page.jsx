import React from "react";
import Link from "next/link";

import { Banner } from "@/components/Banner";

import aboutUs from "@/assets/about-us.png";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Banner heading={"About Us"} />
      <section className={styles.about_section}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className={`${styles.content_column} col-lg-7  order-2`}>
              <div className={styles.inner_column}>
                <div data-aos="fade-up" className={styles.sec_title}>
                  <span className={styles.title}>About Whitediamond</span>
                  <h2>A group of dependable and skilled contractors.</h2>
                </div>
                <div data-aos="fade-up" className={styles.text}>
                  A seasoned and trustworthy team of contractors, possessing
                  extensive experience in their respective fields, is crucial
                  for ensuring the success of any project. These professionals
                  bring a wealth of expertise and reliability, contributing to
                  the seamless execution of tasks and the achievement of project
                  goals. Their collective skills and proven track record instill
                  confidence in their ability to deliver high-quality results.
                </div>
                <div data-aos="fade-up" className={styles.text}>
                  In the realm of construction and project management, the
                  significance of a reliable and experienced contractor team
                  cannot be overstated. Their proficiency not only streamlines
                  the workflow but also minimizes the likelihood of setbacks or
                  errors. Clients can have peace of mind knowing that the
                  project is in the hands of capable individuals who have
                  navigated various challenges, demonstrating a consistent
                  commitment to excellence.
                </div>
                <div data-aos="fade-up" className={styles.btn_box}>
                  <Link href="/contact">Contact Us</Link>
                </div>
              </div>
            </div>

            <div className={`${styles.image_column} col-lg-5 `}>
              <div data-aos="fade-up" className={styles.inner_column}>
                <div className={styles.image_1}>
                  <Image title="image" src={aboutUs} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className={`${styles.sec_title} ${styles.goal_v}`}
          >
            <span className={styles.title}>Our Future Goal</span>
            <h2>
              Aspiring Towards Our Future Excellence: Visionary Goals and
              Strategic Milestones
            </h2>
          </div>
          <div data-aos="fade-up" className={styles.text}>
            Charting a course for success, our future goal envisions
            unparalleled excellence and strategic milestones, propelling us
            towards a brighter tomorrow.
          </div>
          <div data-aos="fade-up" className={styles.text}>
            Embracing innovation and ambition, our future goal is a beacon
            guiding us towards sustained excellence and transformative
            achievements.
          </div>
          <div data-aos="fade-up" className={styles.text}>
            Forging a path to excellence through visionary planning and
            unwavering commitment to strategic milestones.
          </div>
          <div data-aos="fade-up" className={styles.text}>
            In pursuit of our future goal, we aim to set new benchmarks,
            fostering a legacy of innovation, growth, and enduring success.s
          </div>
        </div>
      </section>
    </div>
  );
}
