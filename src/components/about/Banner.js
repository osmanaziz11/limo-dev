import React from "react";
import { AboutUsURLs } from "@/util/urls";
import { AboutUsBannerText } from "@/util/para";
import Image from "next/legacy/image";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <div className={`relative h-[680px] w-full 2xl:h-[1080px]`}>
          <Image
            src={AboutUsURLs.banner}
            alt="aboutus-banner"
            loading="eager"
            priority={true}
            placeholder="blur"
            blurDataURL={AboutUsURLs.bannerBlur}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute left-[32%] 320:top-[80%] 375:top-[77%] 768:top-[52%] 1024:left-[31%] 1024:top-[22%] 1440:left-[34%] 1440:top-[21%]">
          <div className="backdrop-blur-2 flex h-[137px] w-[110px] flex-col items-center justify-center bg-black bg-opacity-50 backdrop-filter 375:h-[158px] 375:w-[148px] 425:h-[180px] 425:w-[148px] md:h-[328px] md:w-[272px] 1024:h-[218px] 1024:w-[222px] lg:h-[540px] lg:w-[450px] 1440:h-[538px] 1440:w-[552px] 2xl:h-[1090px] 2xl:w-[900px]">
            <p className="text-shadow font-LeagueSpartan text-[15px] font-[700] text-white md:text-[35px] 1024:text-[60px] lg:text-[80px] 2xl:text-[120px]">
              {AboutUsBannerText.title}
            </p>
            <div className="text-shadow font-Archivo px-3 py-4 text-center text-white 375:pb-8 375:pt-4 425:px-5 1024:px-14 1024:pb-20 2xl:px-16 2xl:pb-64">
              <p className="text-[5px] font-[300] leading-tight md:text-[12px] 1024:text-[15px] lg:text-[20px] 2xl:text-[30px]">
                {AboutUsBannerText.textContent}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 39 22"
              fill="none"
              className="h-[6px] w-[16px] md:h-[10px] md:w-[20px] 1024:h-[15px] 1024:w-[25px] lg:h-[20px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[40px]"
            >
              <line
                x1="0.707107"
                y1="1.29298"
                x2="19.799"
                y2="20.3849"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="18.3847"
                y1="20.3848"
                x2="37.4766"
                y2="1.2929"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
