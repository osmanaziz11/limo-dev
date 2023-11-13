import { image_urls } from "@/util";
import React from "react";

function BackgroundBanner() {
  return (
    <img
      src={image_urls.reservation_banner}
      alt=""
      srcset=""
      className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-top"
    />
  );
}

export default BackgroundBanner;
