import { Banner } from "@/components/Banner";
import React from "react";

export default function WorkdetailPage({ params: { id } }) {
  console.log(id);
  return (
    <div>
      <Banner heading={id?.replaceAll("_", " ")} />
      WorkdetailPage
    </div>
  );
}
