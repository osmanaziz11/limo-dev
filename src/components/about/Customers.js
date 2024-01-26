import React from "react";
import Text from "./Text";
import Image from "next/legacy/image";
import { AboutUSCustomertexts } from "@/util/para";
import { AboutUsURLs } from "@/util/urls";

const Customers = () => {
  return (
    <>
      <div className="relative bg-cover bg-center pb-7 text-center">
        <Image
          src={AboutUsURLs.background}
          blurDataURL={AboutUsURLs.backgroundBLur}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="90"
            viewBox="0 0 100% 90"
            fill="none"
          >
            <path
              d="M1920 150L0 150L1.9233e-05 -5.06498e-09L1920 0.000167847L1920 150Z"
              fill="url(#paint0_linear_221_296)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_221_296"
                x1="960"
                y1="8.57959e-05"
                x2="960"
                y2="113.046"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-librebaskerville text-[15px] font-[300] italic leading-normal text-white 425:text-[18px] 768:text-[25px] 1024:text-[30px] 2xl:text-[54px]">
            Our prized customer base
          </p>
        </div>
        <div className="relative grid grid-cols-1 gap-6 p-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 1440:gap-8 2xl:gap-11 2xl:p-9">
          {AboutUSCustomertexts.map((text, index) => (
            <Text key={index} text={text} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Customers;
