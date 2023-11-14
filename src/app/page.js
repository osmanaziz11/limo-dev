/* eslint-disable @next/next/no-img-element */
import React from "react";
import Estd from "@/components/home/Estd";
import Fleet from "@/components/home/Fleet";
import { Banner, LatestNews } from "@/components/home";
import CustomerBase from "@/components/home/CustomerBase";
import HomeContact from "@/components/home/HomeContact";
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
      <div class="relative mb-10 sm:mt-1 mt-[229px]">
        <Fleet />
      </div>

      {/* The Customer Base Section  */}
      <div class="">
        <CustomerBase />
      </div>

      {/* The Latest News Section  */}
      <div class="my-32 relative">
        <LatestNews />
        {/* <Polygons active={12} classes="top[20%]"/> */}
      </div>

      {/* The Estd. Section  */}
      <div className="relative">
        <Estd />
        {/* <Polygons active={15} /> */}
      </div>

      {/* The Contact Section  */}
      <div className="md:opacity-100 opacity-0 transition-all md:block hidden">
        <HomeContact/>
      </div>
    </>
  );
}

export default Home;
