/* eslint-disable @next/next/no-img-element */
import React from "react";
import { image_urls } from "@/util";
import Image from "next/legacy/image";
import { leagueSpartan700, montserrat400 } from "@/util/fonts";
import { homeURL } from "@/util/urls";
import Polygons from "../common/Polygons";

function BlackCard({ number, text }) {
  return (
    <div
      className="mx-2 mb-5 flex h-[200px] w-[170px] flex-grow flex-col  justify-between bg-black py-10 xxlg:h-[283px] xxlg:w-[242px]"
      data-aos="zoom-in-up"
    >
      <h1
        className={`text-center text-5xl xxlg:text-7xl ${leagueSpartan700} text-white`}
      >
        {number}
      </h1>
      <p className="px-10 text-center text-xs uppercase text-white xxlg:px-12 xxlg:text-lg">
        {text}
      </p>
    </div>
  );
}

function Estd() {
  const cards = [
    { number: "900", text: "Happy Customers" },
    { number: "12", text: "LUXURY LIMOS" },
    { number: "900k", text: "MILES" },
    { number: "30", text: "QUALIFIED HAUFFEURS" },
  ];

  return (
    <div className="relative h-[1400px] w-full xxs:h-[800px] xxlg:h-[1153px]">
      <Polygons
        active={16}
        classes={`absolute md:block hidden 2lg:right-4 sm:right-5 xxs:right-3 right-1  3xxlg:top-[50%] xl:top-[53%] 2lg:top-[58%] smMd:top-[60%] sm:top-[61%] xs:top-[65%] top-[68%] translate-y-[-50%] z-50  flex flex-col`}
      />
      <Image
        src={homeURL.estd}
        blurDataURL={homeURL.estdBlur}
        alt=""
        layout="fill"
        objectFit="cover"
        className="blur-sm xxs:blur-0"
      />
      <div class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center ">
        {/* Cards Container  */}
        <div className="flex flex-wrap px-8 xxs:px-0">
          {cards.map((card, idx) => {
            return <BlackCard key={idx} {...card} />;
          })}
        </div>

        {/* Row  */}
        <div
          className="mb-32 mt-5 w-[98%] smMd:mb-64 smMd:w-[730px] xxlg:w-[1010px]"
          data-aos="zoom-in-up"
        >
          <h1
            className={`w-full bg-black p-4 text-center uppercase tracking-[10px] text-white opacity-[0.9] shadow-md xxlg:p-8 xxlg:text-2xl ${montserrat400}`}
          >
            -Established 2001-
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Estd;
