import Image from "next/image";

import bannerHome from "@/assets/banner-home.png";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.banner}>
        <div className="container-fluid">
          {/* <div data-aos="fade-up" className={styles.banner_home}>
            <Image src={bannerHome} alt="home" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
