"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Banner } from "@/components/Banner";

export default function Work() {
  const router = useRouter();
  const WorkData = [
    { heading: "lorem ipsum donor" },
    { heading: "BIM Coordination  Clash Detection" },
    { heading: "BIM Coordination  Clash Detection" },
    { heading: "BIM Coordination  Clash Detection" },
  ];
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top">
      <Banner heading={"Our Work"} />
      <div className="container-fluid">
        <div className="row items">
          {WorkData?.map((data, i) => {
            return (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6 ">
                <div
                  onClick={() =>
                    router.push(`/work/${data?.heading?.replaceAll(" ", "_")}`)
                  }
                >
                  <div className="box-s">
                    <img
                      src="https://coderzbar.info/dev/pinceptdev/storage/app/public/category/903178900category_image.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h3>{data?.heading}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
