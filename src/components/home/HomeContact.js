/* eslint-disable @next/next/no-img-element */
import React from "react";
import NavArrows from "./NavArrows";
import * as fonts from "@/util/fonts";
import { Quotes } from "@/assets/icons";
import { News, image_urls } from "@/util";

const TestomonialCard = ({ src, text, name }) => {
  const Montserrat600 = fonts.montserrat600;
  const style = {
    background: "rgba(56, 59, 66, 0.70)",
  };
  return (
    <div
      className="bg mr-3 inline-block h-[250px] w-[300px] flex-col whitespace-normal p-3 transition-all xxlg:h-[370px] xxlg:w-[448px]"
      style={{ ...style }}
    >
      <div className="relative flex items-end justify-between">
        <div class="h-16 w-16 overflow-hidden rounded-full transition-all xxlg:h-28 xxlg:w-28">
          <img
            src={image_urls.home_banner}
            alt="Your Avatar"
            class="h-full w-full object-cover"
          />
        </div>

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
      <img
        src={image_urls.home_banner_bottom}
        alt=""
        className="grayscale filter"
      />
    );
  };

  return (
    <div className="relative mb-32">
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

      <div className="absolute left-0 top-[450px] h-[320px] w-full whitespace-nowrap xxlg:top-[572px] xxlg:h-[366px]">
        <div
          className="relative inline-flex h-full w-[60%] flex-col items-end justify-center whitespace-normal lg:px-10 lg:pr-20"
          style={{
            background:
              "linear-gradient(270deg, #A72211 0%, rgba(141, 73, 73 / 93%) 0%,rgba(33,137,183,0),100%)",
          }}
        >
          <img
            src={image_urls.contact_limosine}
            alt=""
            srcset=""
            className="absolute left-0 mt-0 transition-all md:w-[400px] lg:w-[430px] xl:mt-5 xxlg:-mt-3 xxlg:w-[600px]"
          />
          <h1
            className={`text-[30px] text-white xxlg:text-[42px] ${Libre} w-[300px] text-end `}
          >
            Require a personalized package?
          </h1>
          <p
            className={`w-[200px] text-end text-sm text-white xxlg:w-[240px] xxlg:text-lg ${Archivo} mt-5`}
          >
            Get in touch about your queries and we will get back to you as soon
            as possible.
          </p>
        </div>
        <div className="absolute right-10 inline-flex h-full w-[30%] flex-col justify-between lg:mr-10 lg:pr-10">
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
