/* eslint-disable @next/next/no-img-element */
import React from "react";
import Estd from "@/components/home/Estd";
import Fleet from "@/components/home/Fleet";
import Services from "@/components/home/Services";
import { Banner, LatestNews } from "@/components/home";
import HomeContact from "@/components/home/HomeContact";
import CustomerBase from "@/components/home/CustomerBase";
import CustomerService from "@/components/home/CustomerService";

function Home() {
  return (
    <>
      {/* Banner Section  */}
      <div className="relative">
        <Banner />
        {/* <Polygons active={-1} classes={`absolute right-[0.45rem] xl:top-[35%] xs:top-[42%] top-[44%]  flex translate-y-[-19%] flex-col`} /> */}
      </div>

      <div class="relative">
        <CustomerService />
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
      <div className="">
        <Services />
      </div>

      {/* The Latest News Section  */}
      <div class="relative my-32">
        <LatestNews />
        {/* <Polygons active={12} classes="top[20%]"/> */}
      </div>

      {/* The Estd. Section  */}
      {/* <div className="relative">
        <Estd />
      </div> */}

      {/* The Contact Section  */}
      <div className="hidden opacity-0 transition-all md:block md:opacity-100">
        {/* <HomeContact/> */}
      </div>
    </>
  );
}

export default Home;
