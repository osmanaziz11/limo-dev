/* eslint-disable @next/next/no-img-element */
import React from "react";

import Fleet from "@/components/home/Fleet";
import Services from "@/components/home/Services";
import { Banner, LatestNews } from "@/components/home";

import CustomerBase from "@/components/home/CustomerBase";
import CustomerService from "@/components/home/CustomerService";
import Estd from "@/components/home/Estd";
import HomeContact from "@/components/home/HomeContact";
import Polygons from "@/components/common/Polygons";

function Home() {
  return (
    <>
      {/* Banner Section  */}
      <div className="relative">
        <Banner />
        <Polygons
          active={-1}
          classes={`absolute 2lg:right-4 sm:right-5 xxs:right-3 right-1  3xxlg:top-[50%] xl:top-[53%] 2lg:top-[58%] smMd:top-[60%] sm:top-[61%] xs:top-[65%] top-[68%] translate-y-[-50%] z-[2]  flex flex-col`}
        />
      </div>

      <div class="relative">
        <CustomerService />
        <Polygons
          active={6}
          classes={`absolute 2lg:right-4 sm:right-5 xxs:right-3 right-1  3xxlg:top-[50%] xl:top-[53%] 2lg:top-[58%] smMd:top-[60%] sm:top-[61%] xs:top-[65%] top-[68%] translate-y-[-50%] z-[2]  flex flex-col  md:hidden`}
        />
      </div>

      {/* The Fleet Section  */}
      <div class="relative mb-10 mt-[229px] sm:mt-1">
        <Fleet />
      </div>

      {/* The Customer Base Section  */}
      <div class="">
        <CustomerBase />
      </div>

      {/* The Service Section  */}
      <div className="relative">
        <Services />
        <Polygons
          active={10}
          classes={`absolute md:block hidden 2lg:right-4 sm:right-5 xxs:right-3 right-1  3xxlg:top-[50%] xl:top-[53%] 2lg:top-[58%] smMd:top-[60%] sm:top-[61%] xs:top-[65%] top-[68%] translate-y-[-50%] z-2  flex flex-col`}
        />
      </div>

      {/* The Latest News Section  */}
      <div class="relative mt-32">
        <LatestNews />
        <Polygons
          active={13}
          classes={`absolute md:block hidden 2lg:right-4 sm:right-5 xxs:right-3 right-1  3xxlg:top-[50%] xl:top-[53%] 2lg:top-[58%] smMd:top-[60%] sm:top-[61%] xs:top-[65%] top-[68%] translate-y-[-50%] z-2  flex flex-col`}
        />
      </div>

      {/* The Estd. Section  */}
      <div className="relative mb-32">
        <Estd />
      </div>

      {/* The Contact Section  */}
      <div className="relative">
        <HomeContact />
      </div>
    </>
  );
}

export default Home;
