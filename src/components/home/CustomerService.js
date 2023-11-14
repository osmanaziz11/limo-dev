/* eslint-disable @next/next/no-img-element */
import React from "react";
import { homeURL } from "@/util/urls";
import ServiceCard from "./ServiceCard";
import { archivo300, libre400, montserrat400, montserrat500 } from "@/util/fonts";

function CustomerService() {
  const LibreBaskerville = libre400;
  const services = [
    {
      topText: "Exceptional customer service",
      src: homeURL.CustomerService,
      blurSrc: homeURL.CustomerServiceBlur,
      bottomText:
        "Masterpiece Limousine is dedicated to providing our clients with the highest level of service, ensuring a smooth an enjoyable transportation experience.",
    },
    {
      topText: "Reliability",
      src: homeURL.Reliability,
      blurSrc: homeURL.ReliabilityBlur,
      bottomText:
        "We are committed to being punctual and dependable, ensuring our clients arrive at their destination on time and with minimal stress.",
    },
    {
      topText: "Safety",
      src: homeURL.Safety,
      blurSrc: homeURL.SafetyBlur,
      bottomText:
        "The safety of our clients is our top priority. We only hire qualified and experienced chauffeurs trained in safe driving practices and knowledgeable about the Southern California region.",
    },
  ];
  return (
    <>
      <div className="my-32 flex w-full flex-col items-center justify-center px-10 sm:block sm:whitespace-nowrap smMd:px-16">
        {services.map((service, idx) => {
          return <ServiceCard key={idx} {...service} />;
        })}
      </div>
      <div class=" relative top-[200px] -z-10 w-full smMd:top-[47px] 2lg:-top-[200px]  xl:-top-[280px]  xxlg:-top-[338px]">
        <img
          src="/images/service_banner.png"
          alt=""
          srcset=""
          className="h-full w-full object-cover"
        />
        <div className="absolute xxs:-top-[18rem] -top-[20rem] left-0 w-[90%] xxs:ps-16 px-5 sm:-top-44 smMd:-top-10 smMd:w-[560px] 2lg:top-[40%] xxlg:w-[813px]">
          <h1
            className={` xxs:text-[30px] text-[25px] text-white smMd:text-[40px] xxlg:text-[60px] ${LibreBaskerville}`}
          >
            Dont settle for anything less than the best!
          </h1>
          <p
            className={`text-xs  text-white smMd:text-sm xxlg:text-base ${archivo300} mt-3`}
          >
            Elevate your next event with the ultimate experience of luxury,
            safety, and reliability with Masterpiece Limousine. Our exceptional
            customer service and affordable prices are unmatched, making every
            trip unforgettable. Whether its a wedding, corporate event, or a
            night out on the town, weve got you covered. Dont wait any longer;
            contact us today and book your luxury transportation!
          </p>
          <div className="mt-10 flex w-full items-center justify-center">
            <button className={`mt- sm:me-5 bg-crimson sm:px-14 px-5 py-3 text-white outline-none text-xs xxlg:px-16 xxlg:py-4 sm:text-base ${montserrat500}`}>
              RESERVE NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerService;
