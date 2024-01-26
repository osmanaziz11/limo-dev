import React from "react";
import Image from "next/legacy/image";
import { servicesBannerData } from "@/util/para";
import { ServiceBannerURL } from "@/util/urls";
const Hero = () => {
  return (
    <>
      <div className="relative 320:mb-2 768:mb-12 1024:mb-32">
        <div className="relative w-full 320:h-[220px] 375:h-[290px] 425:h-[280px] 768:h-[550px] 1024:h-[830px] 1440:h-[1000px] 2xl:h-[1870px]">
          <Image
            src={ServiceBannerURL.banner}
            blurDataURL={ServiceBannerURL.bannerBlur}
            layout="fill"
          />
        </div>
        <div className="absolute left-[3%] top-[21%] 320:left-[5%] 425:top-[25%] 768:top-[23%] 1024:top-[23%] 1440:left-[5%] 1440:top-[23%] 2xl:left-[6%] 2xl:top-[24%]">
          <h1 className="font-Leaguespartan font-[700] -tracking-tighter text-white 320:text-[12px] 320:leading-[11px] 768:text-[55px] 768:leading-[44px] 1024:text-[66px] 1024:leading-[52px] 1440:text-[90px] 1440:leading-[73px] 2xl:text-[142px] 2xl:leading-[115px]">
            EXCLUSIVE
            <br />
            SERVICES
          </h1>
          <ul className="320:mt-2 320:space-y-1.5 768:mt-5 768:space-y-4 1024:mt-8 1024:space-y-[20px] 1440:mt-8 1440:space-y-6 2xl:mt-16 2xl:space-y-12">
            {servicesBannerData.map((service, index) => (
              <li
                key={index}
                className=" text-shadow-md font-Montserrat font-bold uppercase italic leading-normal text-white 320:text-[4.5px] 320:leading-[1.2px] 320:tracking-[1.6px] 768:text-[12px] 768:leading-[0.8px] 768:tracking-[3.6px] 1024:text-[15px] 1024:leading-[3.5px] 1024:tracking-[5px] 1440:text-[21px] 1440:leading-[6px] 1440:tracking-[6px] 2xl:text-[35px] 2xl:leading-[4.6px] 2xl:tracking-[7px]"
              >
                + {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
