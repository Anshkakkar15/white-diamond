import { Banner } from "@/components/Banner";
import React from "react";

export default function Work() {
  const WorkData = [
    { heading: "lorem ipsum donor" },
    { heading: "BIM Coordination &amp; Clash Detection" },
    { heading: "BIM Coordination &amp; Clash Detection" },
    { heading: "BIM Coordination &amp; Clash Detection" },
  ];
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top">
      <Banner heading={"Our Work"} />
      <div className="container-fluid">
        <div class="row items">
          {WorkData?.map((data) => {
            return (
              <div className="col-xl-3 col-lg-4 col-md-6 ">
                <a href="#">
                  <div class="box-s">
                    <img
                      src="https://coderzbar.info/dev/pinceptdev/storage/app/public/category/903178900category_image.png"
                      class="img-fluid"
                      alt=""
                    />
                    <h3>{data?.heading}</h3>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
