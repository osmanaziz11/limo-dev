/* eslint-disable @next/next/no-img-element */
import React from "react";
import NavArrows from "./NavArrows";
import * as fonts from "@/util/fonts";
import { Quotes } from "@/assets/icons";
import { News, image_urls } from "@/util";
import Image from "next/legacy/image";
import { homeURL } from "@/util/urls";
import Polygons from "../common/Polygons";

const TestomonialCard = ({ src, text, name }) => {
  const Montserrat600 = fonts.montserrat600;
  const style = {
    background: "rgba(56, 59, 66, 0.70)",
  };
  return (
    <div
      className="bg mr-3 inline-block h-[250px] w-[300px] flex-col whitespace-normal p-3 transition-all xxlg:h-[370px] xxlg:w-[448px]"
      style={{ ...style }}
      data-aos="zoom-in-up"
    >
      <div className="relative flex items-end justify-between">
        <div class="h-16 w-16 overflow-hidden rounded-full bg-white transition-all xxlg:h-28 xxlg:w-32"></div>

        <div className="h-[1px] w-[80%] bg-white transition-all xxlg:h-[4px] xxlg:w-[90%]"></div>
        <div className="absolute right-0 mb-3">
          <Quotes width={40} height={40} />
        </div>
      </div>

      <p className={`my-5 text-center text-xs text-white xxlg:text-lg`}>
        “We have used Masterpiece Limos for a while now and have enjoyed the
        prompt services and great hospitality that we receive not only from the
        owner but the drivers as well. This limo service is highly recommended,
        for any special or fun occasion and we wouldn’t use anyone else.”
      </p>

      <div className="flex items-center justify-end">
        <p
          className={`text-[8px] text-[#FAC30F] transition-all xxlg:text-[12px] ${Montserrat600}`}
        >
          MIKE & MONICA BRADBURN
        </p>
        <div className="ml-4 h-[1px] w-[40%] bg-white transition-all xxlg:h-[2px]"></div>
      </div>
    </div>
  );
};

function HomeContact() {
  const Libre = fonts.libre400;
  const Archivo = fonts.archivo300;
  const Montserrat400 = fonts.montserrat400;

  const primaryHeading = `mx-2 text-sm uppercase tracking-[10px] text-[#a9a8a7] ${Montserrat400}`;

  const BackgroundImage = () => {
    return (
      <Image
        src={homeURL.lastBanner}
        alt=""
        layout="fill"
        objectFit="cover"
        className="grayscale filter"
        blurDataURL={homeURL.lastBannerBlur}
      />
    );
  };

  const gradient = {
    backgroundImage: `url(${homeURL.gradient})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative mb-32 h-[1500px] w-full sm:h-[1300px] lg:h-[800px] xxlg:h-[1200px]">
      <BackgroundImage />
      <div className="absolute left-0 top-0 w-full px-2 md:px-10 lg:left-0 xxlg:w-[80%]">
        <div className="flex w-full items-center justify-between lg:pr-52">
          <h1 className={primaryHeading}>Hear it from our valued clients</h1>
          <NavArrows />
        </div>

        <div class="no-scrollbar my-10 mb-32 ml-2 overflow-scroll whitespace-nowrap lg:w-[81%]">
          {News.map((_, idx) => {
            return <TestomonialCard key={idx} {..._} />;
          })}
        </div>
      </div>
      <Polygons
        active={20}
        classes={`absolute md:block hidden 2lg:right-4 sm:right-5 xxs:right-3 right-1  3xxlg:top-[50%] xl:top-[53%] 2lg:top-[58%] smMd:top-[60%] sm:top-[61%] xs:top-[65%] top-[68%] translate-y-[-50%] z-50  flex flex-col`}
      />
      <div className="absolute left-0 top-[450px] h-[320px] w-full whitespace-normal  lg:whitespace-nowrap xxlg:top-[702px] xxlg:h-[366px]">
        <div
          className="relative top-[500px] inline-flex h-[430px] w-[100%] flex-col  items-end justify-center whitespace-normal px-5 xs:h-[400px] sm:h-[280px] smMd:h-full smMd:pr-20 lg:top-0 lg:w-[60%] lg:px-10"
          style={gradient}
        >
          <div className="absolute bottom-0 left-0 h-[300px]  w-[100%] xs:bottom-10  sm:-top-32  sm:h-[400px] sm:w-[65%]  md:h-[600px] 2xxlg:w-[70%]">
            <div class="relative h-full w-full" data-aos="fade-right">
              <img
                src={homeURL.limo}
                alt=""
                srcset=""
                className="absolute left-0 top-16 mt-0 w-[450px] transition-all smMd:w-[500px] lg:mt-5 lg:w-[550px] xl:top-5 xxlg:-mt-3 xxlg:w-[700px]"
              />
            </div>
          </div>
          <div className="relative -top-[100px] flex flex-col items-end justify-start xxs:-top-[80px] sm:-top-0">
            <h1
              className={`text-[30px] text-white xxlg:text-[42px] ${Libre} w-[300px] text-end `}
            >
              Require a personalized package?
            </h1>
            <p
              className={`w-[200px] text-end text-sm text-white xxlg:w-[240px] xxlg:text-lg ${Archivo} mt-5`}
            >
              Get in touch about your queries and we will get back to you as
              soon as possible.
            </p>
          </div>
        </div>
        <div className="absolute right-0 inline-flex h-full w-[100%] flex-col justify-between px-5 sm:px-20 lg:right-10 lg:mr-10 lg:w-[30%] lg:px-1 lg:pr-10">
          <div className="flex">
            <p
              className={`pe-4 uppercase text-white xxlg:text-xl ${Montserrat400}`}
            >
              Name:
            </p>
            <input type="text" className="w-full border-b bg-transparent" />
          </div>
          <div className="flex">
            <p
              className={`pe-4 uppercase text-white xxlg:text-xl ${Montserrat400}`}
            >
              Email:
            </p>
            <input type="text" className="w-full border-b bg-transparent" />
          </div>

          <div className="flex flex-col">
            <p className="pe-4 text-white xxlg:text-xl">Message:</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              className="border-b bg-transparent"
            ></textarea>
          </div>
          <button
            className={`bg-[#2189B7] p-2 uppercase text-white lg:p-3   xxlg:p-5 xxlg:text-lg ${Montserrat400}`}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
