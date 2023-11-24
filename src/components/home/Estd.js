/* eslint-disable @next/next/no-img-element */
import React from "react";
import { image_urls } from "@/util";
import { leagueSpartan700, montserrat400 } from "@/util/fonts";

function BlackCard({ number, text }) {
  return (
    <div className="flex h-[200px] w-[170px] flex-col justify-between  bg-black py-10 xxlg:h-[283px] xxlg:w-[242px]">
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
    <div className="relative w-full xxlg:h-[1153px]">
      <img
        src={image_urls.home_banner_bottom_center}
        alt=""
        className="w-full xxlg:h-full xxlg:object-cover"
      />
      <div class="xxlg:estd-cards-xxlg estd-cards absolute left-[47%] top-[15%] w-[72%] translate-x-[-47%]  px-32 py-14 xxlg:top-[150px]">
        {cards.map((card, idx) => {
          return <BlackCard key={idx} {...card} />;
        })}
      </div>
      <div className="absolute left-1/2 top-1/2 w-[72%] translate-x-[-50%] translate-y-[-50%] px-32 text-white  xxlg:w-[66%] ">
        <h1
          className={`bg-black p-4 text-center uppercase tracking-[10px] opacity-[0.9] shadow-md xxlg:p-8 xxlg:text-2xl ${montserrat400}`}
        >
          -Established 2001-
        </h1>
      </div>
    </div>
  );
}

export default Estd;
