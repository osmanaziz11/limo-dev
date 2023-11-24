/* eslint-disable @next/next/no-img-element */
"use client";
import {
  ButtonsRow,
  StepOneContent,
  StepThreeContent,
  StepTwoContent,
} from "@/components/reservation";
import BackgroundBanner from "@/components/reservation/BackgroundBanner";
import Header from "@/components/reservation/Header";
import React, { useState } from "react";




function Reservation() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="relative min-h-screen  w-full   px-5 pt-52 sm:px-10 md:px-20 lg:px-52 ">
      <BackgroundBanner />

      <ButtonsRow />
      {/* STEP 1  */}
      <div className="z-50 mb-5 mt-5 w-full">
        {/* Header  */}
        <Header
          title="STEP 1 - RIDE INFORMATION"
          activeTab={activeTab}
          onClick={() => (activeTab === 1 ? setActiveTab(-1) : setActiveTab(1))}
        />

        {/* Content  */}
        <StepOneContent activeTab={activeTab} />
      </div>

      {/* STEP 2  */}
      <div className="mb-5 mt-5 w-full">
        {/* Header  */}
        <Header
          title="STEP 2 - SELECT VEHICLE"
          activeTab={activeTab}
          onClick={() => (activeTab === 2 ? setActiveTab(-1) : setActiveTab(2))}
        />
        {/* Content  */}
        <StepTwoContent activeTab={activeTab} />
      </div>

      {/* STEP 3  */}
      <div className="mb-5 mt-5 w-full">
        {/* Header  */}
        <Header
          title="STEP 3 - FINAL DETAILS"
          activeTab={activeTab}
          onClick={() => (activeTab === 3 ? setActiveTab(-1) : setActiveTab(3))}
        />

        {/* Content  */}
        <StepThreeContent activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Reservation;
