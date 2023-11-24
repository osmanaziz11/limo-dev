import React from "react";
import Image from "next/legacy/image";

import { homeURL } from "@/util/urls";
import { RightArrow } from "@/assets/icons";
import { ServiceContent } from "@/util/para";
import ServiceCardWeb from "./ServiceCardWeb";
import ServiceCardMobile from "./ServiceCardMobile";
import { archivo300, leagueSpartan700, montserrat400 } from "@/util/fonts";

function Services() {
  const Montserrat = montserrat400;
  const para = `w-auto slg:text-start text-center 3xxlg:text-[20px] 2xxlg:text-[18px] xxlg:text-base text-sm leading-[1.1] text-[#e7e2e2] relative slg:-top-4 sm:w-[90%] md:w-1/2 slg:pe-[130px] ${archivo300}`;

  const heading = `text-[40px] slg:text-start w-[100%] text-center text-white sm:text-[60px] uppercase  xl:text-[80px] 3xxlg:text-[130px] 2xxlg:text-[100px] xxlg:text-[90px] ${leagueSpartan700}`;

  return (
    <div className="relative mt-10 h-[2450px] xxs:h-[1350px] sm:h-[1100px] smMd:h-[900px] 2lg:h-[800px] xl:h-[900px] xxlg:h-[1000px] 2xxlg:h-[1200px]">
      <Image
        src={homeURL.serviceMainBanner}
        layout="fill"
        objectFit="cover"
        alt="Services"
        className="-z-10"
        blurDataURL={homeURL.serviceMainBannerBlur}
      />

      {/* content  */}
      <div class="absolute left-0 top-0  flex flex-col items-center justify-center px-5 py-10 xs:p-10 xs:px-20 slg:items-start">
        <h1 className={heading}>Our Services</h1>
        <p className={para}>
          Masterpiece Limousine provides luxury, affordable limo services in San
          Diego and nearby areas. Our team of courteous, professional staff,
          including drivers and booking agents, prioritize your needs. Choose us
          for top-notch limo rental services in San Diego.
        </p>
      </div>

      <div className="absolute  hidden h-full w-full items-center justify-end pe-20 slg:flex">
        <div className="mt-20">
          <ServiceCardWeb {...ServiceContent.graduation} />
        </div>

        <div className="mx-3 mt-20 flex flex-col">
          <ServiceCardWeb {...ServiceContent.airportTransfer} />
          <ServiceCardWeb {...ServiceContent.casinos} />
        </div>
        <div className=" mb-20 flex flex-col">
          <ServiceCardWeb {...ServiceContent.tours} />
          <ServiceCardWeb {...ServiceContent.tours} />
        </div>
        <div className=" mx-3 flex flex-col">
          <ServiceCardWeb {...ServiceContent.airportTransfer} />
          <ServiceCardWeb {...ServiceContent.weddings} />
          <ServiceCardWeb {...ServiceContent.concerts} />
        </div>
      </div>

      {/* mobile version content  */}
      <div class="abolute left-0 top-0 z-50 flex h-full w-full justify-center slg:hidden">
        <div class="absolute smMd:bottom-32 sm:bottom-24 xs:bottom-36 bottom-28 grid w-[100%] gap-0  xxs:grid-cols-2  sm:grid-cols-3 slg:bottom-10 smMd:grid-cols-4 xxs:px-0 px-6">
          <ServiceCardMobile {...ServiceContent.graduation} />
          <ServiceCardMobile {...ServiceContent.airportTransfer} />
          <ServiceCardMobile {...ServiceContent.casinos} />
          <ServiceCardMobile {...ServiceContent.tours} />
          <ServiceCardMobile {...ServiceContent.tours} />
          <ServiceCardMobile {...ServiceContent.airportTransfer} />
          <ServiceCardMobile {...ServiceContent.weddings} />
          <ServiceCardMobile {...ServiceContent.concerts} />
        </div>
      </div>

      {/* last row  */}
      <div className="flex w-full absolute 2xxlg:bottom-20 xl:bottom-5 bottom-10 items-center justify-end sm:px-20 px-5">
        <h1
          class={`mx-2 sm:text-lg text-sm uppercase tracking-[10px] text-[#a9a8a7] ${Montserrat}`}
        >
          VIEW ALL SERVICES
        </h1>
        <RightArrow width={24} height={24} />
      </div>
    </div>
  );
}

export default Services;
