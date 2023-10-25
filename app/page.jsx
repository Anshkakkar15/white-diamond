import Image from "next/image";
import { ServiceCard } from "@/components/cards/Service";

import styles from "@/styles/Home.module.css";
import { HandIcon, Pencil, Send } from "lucide-react";
import aboutImg from "@/assets/abous_us.jpg";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.banner}>
        <div className="container-fluid">
          <div data-aos="fade-right" className={styles.main_content}>
            <h1>
              <strong>turning</strong> dreams into <strong>reality</strong>
            </h1>
            <p>
              We Provide You the most complete industrial solutions in the
              century for the <br />
              research,design & development of materials
            </p>
            <button className={`web-primary-button ${styles.banner_btn}`}>
              Get a Free Project Consultation
            </button>
          </div>
        </div>
      </div>
      <div className={styles.our_services}>
        <div className="container-fluid">
          <div className="row ">
            <div className={`col-md-6 ${styles.service_head}`}>
              <h2>
                OUR <span>SERVICES</span>
              </h2>
            </div>
            <div className={`col-md-6 ${styles.service_content}`}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                rem quidem explicabo magni voluptates quae perspiciatis, optio
                et ratione vero consequatur sit
              </p>
            </div>
          </div>
          <div className="card__container">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
      <div className={`${styles.section_all} bg-light`} id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className={`${styles.section_title_all} text-center`}>
                <h3>
                  OUR <span className={styles.text_custom}>MISSION</span>
                </h3>
                <p className={`${styles.section_subtitle} mx-auto text-muted`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-lg-6">
              <div className={`${styles.about_header_main} mt-3`}>
                <div className="about_icon_box">
                  <p className={`${styles.text_custom} ${styles.abt_head}`}>
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
                <h4 className={`${styles.about_heading} text-capitalize`}>
                  Lorem Ipsum is simply dummy text of the printing industry.
                </h4>
                <p className={styles.about_text}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>

                <p className={styles.about_text}>
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.img_about} mt-3`}>
                <Image
                  src={aboutImg}
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-lg-4 col-md-6">
              <div className={styles.about_content_box_all}>
                <div className="about_detail text-center">
                  <div className={styles.about_icon}>
                    <Pencil />
                  </div>
                  <h5 className={styles.about_icon_head}>Creative Design</h5>
                  <p className={styles.about_icon_desc}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.about_content_box_all}>
                <div className="about_detail text-center">
                  <div className={styles.about_icon}>
                    <HandIcon />
                  </div>
                  <h5 className={styles.about_icon_head}>
                    We make Best Result
                  </h5>
                  <p className={styles.about_icon_desc}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.about_content_box_all}>
                <div className="about_detail text-center">
                  <div className={styles.about_icon}>
                    <Send />
                  </div>
                  <h5 className={styles.about_icon_head}>best platform </h5>
                  <p className={styles.about_icon_desc}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact_form}>
        <div className="container-fluid">
          <div className={styles.contact_head}>drop us a message</div>
          <div className={styles.contact_form_Vs}>
            <div className="row ">
              <div className={`col-md-6 ${styles.contact_input}`}>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className={`col-md-6 ${styles.contact_input}`}>
                <input type="text" placeholder="Email" />
              </div>
              <div className={`col-12 ${styles.contact_input}`}>
                <textarea type="text" placeholder="Message" />
              </div>
              <div className="col-12">
                <button className={styles.form_btn}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
