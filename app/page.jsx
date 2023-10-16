import Image from "next/image";

import bannerHome from "@/assets/banner-home.png";

import styles from "@/styles/Home.module.css";
import { Button } from "@/components/Button";

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
    </div>
  );
}
