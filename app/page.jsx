import { Button } from "@/components/Button";

import styles from "@/styles/Home.module.css";
import { Hammer } from "lucide-react";

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
          <div className={styles.card__container}>
            <div className={styles.card__bx}>
              <div className={styles.card__data}>
                <div className={styles.card__icon}>
                  <Hammer />
                </div>
                <div className={styles.card__content}>
                  <h3>Designing</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className={styles.card__bx}>
              <div className={styles.card__data}>
                <div className={styles.card__icon}>
                  <Hammer />
                </div>
                <div className={styles.card__content}>
                  <h3>Designing</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className={styles.card__bx}>
              <div className={styles.card__data}>
                <div className={styles.card__icon}>
                  <Hammer />
                </div>
                <div className={styles.card__content}>
                  <h3>Designing</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
