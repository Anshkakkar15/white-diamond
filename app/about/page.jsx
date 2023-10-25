import React from "react";

import { Banner } from "@/components/Banner";

import styles from "@/styles/About.module.css";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <Banner heading={"About Us"} />
      <section className="about_section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="content_column col-lg-7  order-2">
              <div className="inner_column">
                <div className="sec_title">
                  <span className="title">About Whitediamond</span>
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, aliquid?
                  </h2>
                </div>
                <div className="text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis quam illum suscipit dolores quidem corrupti sunt
                  assumenda. Voluptates delectus cupiditate sequi ea nisi
                  necessitatibus fugiat! Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Nesciunt, porro.
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima officiis laborum, aperiam repellat debitis similique
                  doloremque eaque, quam necessitatibus praesentium facilis
                  numquam laudantium sapiente nulla incidunt laboriosam
                  asperiores earum architecto? Magni vel expedita architecto,
                  corrupti impedit cum animi possimus illo a velit excepturi
                  veniam doloribus, tenetur dolor est quisquam nostrum.
                </div>
                <div className="btn_box">
                  <Link href="/contact">Contact Us</Link>
                </div>
              </div>
            </div>

            <div className="image_column col-lg-5 ">
              <div className="inner_column wow fadeInLeft">
                <div className="image_1">
                  <img
                    title="image"
                    src="https://source.unsplash.com/500x500?team"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sec_title goal_v">
            <span className="title">Our Future Goal</span>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellat, perspiciatis.
            </h2>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quam error ea, accusantium natus deserunt debitis minus, maxime
            nostrum temporibus beatae! Qui?
          </div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            vero sint quam quisquam facilis beatae.
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            temporibus ipsam doloremque deleniti sed minus ullam impedit enim
            eius iure. Molestias, repellendus? Dolores, officiis eos. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Dolore provident
            facilis at?
          </div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laboriosam, ratione blanditiis? Facere, reprehenderit? Sunt,
            excepturi?
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non,
            quae recusandae quia qui beatae?
          </div>
        </div>
      </section>
    </main>
  );
}
