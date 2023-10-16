"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export const AosInit = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return;
};
