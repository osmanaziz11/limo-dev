import React from "react";
import Image from "next/legacy/image";
import { AboutUsURLs } from "@/util/urls";
import { AboutUSTextOnImage } from "@/util/para";
import { AboutUstextSections } from "@/util/para";
import ImageTextSection from "./ImageTextSection";
import StatsBlock from "./StatsBlock";

const Middle = () => {
  return (
    <>
      <div className="flex flex-col bg-black md:flex-col lg:flex-row">
        <div className="relative flex w-full flex-col lg:mt-60 lg:w-[35%]">
          <div className="relative h-[40%] w-full ">
            <Image
              src={AboutUsURLs.head}
              blurDataURL={AboutUsURLs.headBlur}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
            />
            <div className="320:top-[20px] 768:top-[10px] 1024:top-[-200px] absolute inset-0 flex flex-col items-center justify-center">
              <StatsBlock count="9000" description="HAPPY CUSTOMERS" />
              <StatsBlock count="12" description="LUXURY LIMOS" />
              <StatsBlock count="900K" description="MILES" />
              <StatsBlock count="30" description="QUALIFIED CHAUFFEURS" />
            </div>
          </div>

          {/* <div className="768:hidden relative hidden w-full items-center justify-center md:h-[60%] lg:block lg:h-full">
            <Image
              src={AboutUsURLs.long}
              blurDataURL={AboutUsURLs.longBlur}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
            />

          </div> */}

        </div>
        <div className="relative w-full lg:w-[65%]">

          {AboutUSTextOnImage.map((section, index) => (
            <ImageTextSection
              key={index}
              imageUrl={section.imageUrl}
              blurUrl={section.blurUrl}
              text={section.text}
            />
          ))}

          {AboutUstextSections.map((section, index) => (
            <p key={index} className={section.style}>
              {section.content}
            </p>
          ))}

          <div className="flex justify-center py-6">
            <button className="1024:w-[180px] 1024:h-[45px] 1024:text-[13px] 1440:w-[210px] 1440:h-[55px] 1440:text-[15px] font-Montserrat h-[38px] w-[140px] flex-shrink-0 bg-red-800 text-[11px] font-[600] uppercase tracking-wider text-white 2xl:h-[80px] 2xl:w-[250px] 2xl:text-[20px]">
              RESERVe now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
