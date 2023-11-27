import React from "react";
import Image from "next/legacy/image";
import { AboutUsURLs } from "@/util/urls";
import { AboutUSTextOnImage } from "@/util/para";
import ImageTextSection from "./ImageTextSection";
import StatsBlock from "./StatsBlock";

const Middle = () => {
  return (
    <>
      <div className="flex flex-col bg-black md:flex-col lg:flex-row">
        <div className="relative flex w-full flex-col 320:pt-2 lg:mt-60 lg:w-[32%] 2xl:w-[25%]">
          {/*  */}
          <div className="relative 320:h-[450px] 768:h-[660px] 1024:h-[700px] 1440:h-[750px] 2xl:h-[1000px] w-full">
            <Image
              src={AboutUsURLs.head}
              blurDataURL={AboutUsURLs.headBlur}
              alt="Background Image"
              layout="fill"
            />
            <div className="320:top-[20px] 768:top-[10px] 1024:top-[-200px] 2xl:top-[-250px] absolute inset-0 flex flex-col items-center justify-center">
              <StatsBlock count="9000" description="HAPPY CUSTOMERS" />
              <StatsBlock count="12" description="LUXURY LIMOS" />
              <StatsBlock count="900K" description="MILES" />
              <StatsBlock count="30" description="QUALIFIED CHAUFFEURS" />
            </div>
          </div>
          <div className="768:hidden relative hidden w-full items-center justify-center md:h-[60%] lg:block lg:h-full">
            <Image
              src={AboutUsURLs.long}
              blurDataURL={AboutUsURLs.longBlur}
              alt="Background Image"
              layout="fill"
            />

          </div>

        </div>

        <div className="relative w-full lg:w-[68%] 2xl:w-[75%]">

          {AboutUSTextOnImage.map((section, index) => (
            <ImageTextSection
              key={index}
              imageUrl={section.imageUrl}
              blurUrl={section.blurUrl}
              text={section.text}
            />
          ))}

          <p className="text-white text-center font-libre-baskerville italic font-normal leading-normal text-[13px] 768:text-[18px] p-4 1024:text-[26px] 1024:px-8 1440:text-[34px] 1440:px-16 2xl:text-[52px] 2xl:px-32">
            Whatever your transportation needs may be, weve got you covered.
          </p>

          <p className="text-white text-right text-shadow-md font-LeagueSpartan font-bold leading-tight uppercase pt-10 320:pt-1 1024:pt-6 text-[32px] 425:text-[36px] 768:text-[65px] 1024:text-[70px] 1440:text-[80px] 2xl:text-[135px]">
            Qualified
            Chauffeurs
          </p>

          <p className="pt-5 text-white text-right font-Archivo mr-1 text-[7px] 768:text-[10px] 1024:text-[13px] 1024:leading-[20px] 1440:text-[17px] 2xl:text-[22px] 2xl:leading-[24px] font-light leading-[14px]">
            At Masterpiece Limousine we understand that transportation is more than just getting from one place to another, and we strive to provide our customers with the highest level of service possible. Thats why we carefully select and train our chauffeurs to deliver excellent customer service, reliability, safety, and comfort.
            <br />
            <br />
            Our chauffeurs undergo thorough background checks and rigorous training to meet our strict standards. They are knowledgeable about the San Diego area and committed to providing a smooth and enjoyable ride. Whether youre traveling to or from the airport, celebrating a special occasion, or going on a group excursion, our chauffeurs are dedicated to making your transportation experience positive.
            <br />
            <br />
            At Masterpiece Limousine, customer satisfaction and safety are our top priorities. We go above and beyond to ensure you have a pleasant and stress-free experience while in our care. Our fleet of luxury vehicles is well-maintained and equipped with the latest technology to ensure your safety and comfort.
            <br />
            <br />
            Experience the difference with Masterpiece Limousine, where luxury meets unparalleled service.
          </p>

          <p className="text-white text-center font-libre-baskerville italic font-normal leading-normal pt-10 px-5 768:pt-12 1024:pt-16 1440:pt-36 2xl:py-32 text-[13px] 768:text-[18px] p-4 1024:text-[28px] 1024:px-10 1440:text-[34px] 1440:px-16 2xl:text-[52px] 2xl:px-36">
            Contact us today to book your transportation needs and indulge in the ultimate luxury transportation experience.
          </p>

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
