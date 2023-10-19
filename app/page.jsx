import Image from "next/image";

import { Button } from "@/components/Button";

import styles from "@/styles/Home.module.css";
import bannerHome from "@/assets/banner-home.png";
import workerImg from "@/assets/worker_img.png";

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
            <Button extra={styles.banner_btn}>
              Get a Free Project Consultation
            </Button>
          </div>
          <div data-aos="fade-up" className={styles.banner_home}>
            <Image src={bannerHome} alt="home" />
          </div>
        </div>
      </div>
      {/* <div className={styles.about_section}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.img_cont}>
                <img
                  src={`https://assets.website-files.com/64ae2a1465888c97a189d576/64ae2a1465888c97a189d5c2_seven-construction-workers-standing-on-white-field-ps-p-800.jpeg`}
                  alt="worker"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.about_content}>
                <h2>Who We Are</h2>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
