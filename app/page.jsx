import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/cards/Service";

import styles from "@/styles/Home.module.css";

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
        </div>
      </div>
      <div className={styles.our_services}>
        <div className="container-fluid">
          <div className="row">
            <div className={`col-md-6 ${styles.service_head}`}>
              <h2>
                OUR <span>SERVICES</span>{" "}
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
    </div>
  );
}
