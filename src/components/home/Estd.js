/* eslint-disable @next/next/no-img-element */
import React from "react";
import { image_urls } from "@/util";
import { leagueSpartan700, montserrat400 } from "@/util/fonts";

function BlackCard({ number, text }) {
  return (
    <div className="flex xxlg:h-[283px] xxlg:w-[242px] h-[200px] w-[170px]  flex-col justify-between bg-black py-10">
      <h1 className={`text-center xxlg:text-7xl text-5xl ${leagueSpartan700} text-white`}>
        {number}
      </h1>
      <p className="xxlg:px-12 px-10 text-center xxlg:text-lg text-xs uppercase text-white">{text}</p>
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
      <img src={image_urls.home_banner_bottom_center} alt="" className="w-full xxlg:h-full xxlg:object-cover"/>
      <div
        class="absolute left-[47%] xxlg:top-[150px] top-[15%] translate-x-[-47%] w-[72%] px-32  py-14 xxlg:estd-cards-xxlg estd-cards"
        
      >
        {cards.map((card, idx) => {
          return <BlackCard key={idx} {...card} />;
        })}
      </div>
      <div className="absolute left-1/2 top-1/2 xxlg:w-[66%] w-[72%] px-32 translate-x-[-50%] translate-y-[-50%]  text-white ">
        <h1 className={`opacity-[0.9] bg-black shadow-md xxlg:p-8 xxlg:text-2xl p-4 text-center tracking-[10px] uppercase ${montserrat400}`}>-Established 2001-</h1>
      </div>
    </div>
  );
}

export default Estd;
