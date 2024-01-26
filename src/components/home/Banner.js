/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { homeURL } from "@/util/urls";

import BannerContent from "./BannerContent";

function Banner() {
  const [width, setWidth] = useState(1349);

  useEffect(() => {
    if (window !== undefined) {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className="relative h-[280px] transition-all xxs:h-auto">
      <div className="absolute right-0 z-[2] h-full w-[246px] bg-gradient-to-l from-black to-transparent shadow-md sm:w-[45%]"></div>

      <div
        className={`relative w-full`}
        style={{
          height: `${width <= 400 ? 280 : (width / 1349) * 756}px`,
        }}
      >
        <Image
          src={homeURL.banner}
          alt="home-banner"
          loading="eager"
          priority={true}
          placeholder="blur"
          blurDataURL={homeURL.bannerBlur}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <BannerContent />
    </div>
  );
}

export default Banner;
