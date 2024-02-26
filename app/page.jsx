"use client";
import Image from "next/image";
import { ServiceCard } from "@/components/cards/Service";

import styles from "@/styles/Home.module.css";
import aboutImg from "@/assets/abous_us.jpg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/mock/home";
import { GiGrowth } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { TbBulb } from "react-icons/tb";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className={styles.homePage}
    >
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
            <button
              onClick={() => router.push("/contact")}
              className={`web-primary-button ${styles.banner_btn}`}
            >
              Get a Free Project Consultation
            </button>
          </div>
        </div>
      </div>
      <div className={styles.our_services}>
        <div className="container-fluid">
          <div className="row ">
            <div
              data-aos="fade-right"
              className={`col-md-6 ${styles.service_head}`}
            >
              <h2>
                OUR <span>SERVICES</span>
              </h2>
            </div>
            <div
              data-aos="fade-left"
              className={`col-md-6 ${styles.service_content}`}
            >
              <p>
                Discover unparalleled expertise with our diverse service
                portfolio. From cutting-edge solutions to personalized support,
                we unlock excellence to meet your unique needs and exceed
                expectations.
              </p>
            </div>
          </div>
          <div className="card__container">
            {services?.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.section_all} bg-light`} id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div
                data-aos="fade-up"
                className={`${styles.section_title_all} text-center`}
              >
                <h3>
                  OUR <span className={styles.text_custom}>MISSION</span>
                </h3>
                <p
                  data-aos="fade-up"
                  className={`${styles.section_subtitle} mx-auto text-muted`}
                >
                  Empowering Futures, Igniting Possibilities – Our Mission, Your
                  Triumph.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="row align-items-center mt-3">
            <div className="col-lg-6">
              <div className={`${styles.about_header_main} mt-3`}>
                <div className="about_icon_box">
                  <p className={`${styles.text_custom} ${styles.abt_head}`}>
                    Crafting Dreams, Constructing Realities: Our Mission in
                    Building Your Tomorrow.
                  </p>
                </div>
                <h4 className={`${styles.about_heading} text-capitalize`}>
                  We do it with perfection because it’s our passion
                </h4>
                <p className={styles.about_text}>
                  At White Diamond, perfection is not just a goal; it's our
                  passion. From foundation to finish, we infuse every project
                  with dedicated craftsmanship, turning blueprints into
                  masterpieces..
                </p>

                <p className={styles.about_text}>
                  In the realm of construction, our passion for perfection is
                  the driving force behind each endeavor. With meticulous
                  attention to detail and unwavering dedication, we transform
                  architectural visions into reality, ensuring that every
                  project not only stands with structural integrity but also
                  resonates with the essence of our commitment to excellence.
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
            <div data-aos="fade-down" className="col-lg-4 col-md-6">
              <div className={styles.about_content_box_all}>
                <div className="about_detail text-center">
                  <div className={styles.about_icon}>
                    <GiGrowth />
                  </div>
                  <h5 className={styles.about_icon_head}>Empowering Growth</h5>
                  <p className={styles.about_icon_desc}>
                    Constructing progress, shaping futures with every project
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-lg-4 col-md-6">
              <div className={styles.about_content_box_all}>
                <div className="about_detail text-center">
                  <div className={styles.about_icon}>
                    <TbBulb />
                  </div>
                  <h5 className={styles.about_icon_head}>
                    Innovating Tomorrow
                  </h5>
                  <p className={styles.about_icon_desc}>
                    Redefining construction through cutting-edge solutions and
                    visionary approaches.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" className="col-lg-4 col-md-6">
              <div className={styles.about_content_box_all}>
                <div className="about_detail text-center">
                  <div className={styles.about_icon}>
                    <SlBadge />
                  </div>
                  <h5 className={styles.about_icon_head}>
                    Commitment to Lasting Quality
                  </h5>
                  <p className={styles.about_icon_desc}>
                    Building legacies, ensuring enduring excellence in every
                    structure crafted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.contact_form}>
        <div className="container-fluid">
          <div className={styles.contact_head}>drop us a message</div>
          <div className={styles.contact_form_Vs}>
            <form onSubmit={handleSubmit}>
              <div className="row ">
                <div className={`col-md-6 ${styles.contact_input}`}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    onChange={handleChange}
                    name="name"
                    value={formData?.name}
                    required
                  />
                </div>
                <div className={`col-md-6 ${styles.contact_input}`}>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData?.email}
                    required
                  />
                </div>
                <div className={`col-12 ${styles.contact_input}`}>
                  <textarea
                    type="text"
                    placeholder="Message"
                    onChange={handleChange}
                    name="message"
                    value={formData?.message}
                    required
                  />
                </div>
                <div className="col-12">
                  <input
                    type="submit"
                    value="submit"
                    className={styles.form_btn}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
