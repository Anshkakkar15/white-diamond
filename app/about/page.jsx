import React from "react";

import { Banner } from "@/components/Banner";

import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <main>
      <Banner heading={"About Us"} />
      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="sec-title">
                  <span class="title">About Whitediamond</span>
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, aliquid?
                  </h2>
                </div>
                <div class="text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis quam illum suscipit dolores quidem corrupti sunt
                  assumenda. Voluptates delectus cupiditate sequi ea nisi
                  necessitatibus fugiat! Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Nesciunt, porro.
                </div>
                <div class="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima officiis laborum, aperiam repellat debitis similique
                  doloremque eaque, quam necessitatibus praesentium facilis
                  numquam laudantium sapiente nulla incidunt laboriosam
                  asperiores earum architecto? Magni vel expedita architecto,
                  corrupti impedit cum animi possimus illo a velit excepturi
                  veniam doloribus, tenetur dolor est quisquam nostrum.
                </div>
                <div class="btn-box">
                  <a href="#" class="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column wow fadeInLeft">
                <div class="image-1">
                  <a href="#" class="lightbox-image" data-fancybox="images">
                    <img
                      title="Rahul Kumar Yadav"
                      src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="sec-title">
            <span class="title">Our Future Goal</span>
            <h2>We want to lead in innovation & Technology</h2>
          </div>
          <div class="text">
            We works on UI/UX and functionality as well so that a plugins comes
            with proper stucture & stunning looks which suits to your web app &
            website.
          </div>
          <div class="text">
            We take a small toolkit here and ride it well so that it is fit for
            your use. One who performs well and looks even better.
          </div>
          <div class="text">
            Here we are trying to give you all kinds of technical content,
            whether it is related to designing or functionality. We are creating
            content on a lot of languages and will continue to make it free of
            cost even if you use it without any problem. Which is a very
            important thing.
          </div>
          <div class="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div class="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div>
        </div>
      </section>
    </main>
  );
}
