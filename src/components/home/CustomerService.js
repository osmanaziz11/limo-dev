/* eslint-disable @next/next/no-img-element */
import { image_urls } from "@/util";
import { archivo300, libre400, montserrat400, montserrat500 } from "@/util/fonts";
import React from "react";

function ServiceCard({ topText, src, bottomText }) {
  return (
    <div className="relative me-2 sm:inline-flex flex flex-col smMd:w-60 whitespace-normal xxlg:w-[378px] sm:w-[33%]  w-[239px] sm:mb-1 mb-24">
      <div class="absolute bottom-0 h-[30%] w-full bg-gradient-to-t from-black to-transparent shadow-2xl"></div>
      <div class="absolute top-[16%]  h-[30%] w-full bg-gradient-to-b from-blue-400 via-transparent to-transparent xxlg:top-[13%]"></div>
      <p
        className={`flex h-[72px] justify-center p-3 text-center text-xs uppercase text-[#d0d0d0] xxlg:h-[85px] xxlg:text-base ${montserrat400} tracking-[10px]`}
      >
        {topText}
      </p>
      <div class="h-[359px] xxlg:h-[575px]">
        <img
          src={src}
          alt=""
          srcset=""
          className="h-full w-full object-cover "
        />
      </div>
      <p
        className={`absolute -bottom-8 px-4 text-center text-xs text-[#d0d0d0] xxlg:text-base ${montserrat400}`}
      >
        {bottomText}
      </p>
    </div>
  );
}
function CustomerService() {
  const LibreBaskerville = libre400;
  const services = [
    {
      topText: "Exceptional customer service",
      src: image_urls.home_servcie1,
      bottomText:
        "Masterpiece Limousine is dedicated to providing our clients with the highest level of service, ensuring a smooth an enjoyable transportation experience.",
    },
    {
      topText: "Reliability",
      src: image_urls.home_servcie2,
      bottomText:
        "We are committed to being punctual and dependable, ensuring our clients arrive at their destination on time and with minimal stress.",
    },
    {
      topText: "Safety",
      src: image_urls.home_servcie3,
      bottomText:
        "The safety of our clients is our top priority. We only hire qualified and experienced chauffeurs trained in safe driving practices and knowledgeable about the Southern California region.",
    },
  ];
  return (
    <>
      <div className="my-32 w-full sm:block flex flex-col justify-center items-center sm:whitespace-nowrap smMd:px-16 px-10">
        {services.map((service, idx) => {
          return <ServiceCard key={idx} {...service} />;
        })}
      </div>
      <div class=" relative xxlg:-top-[338px] xl:-top-[280px] 2lg:-top-[200px] smMd:top-[47px] top-[200px]  -z-10  w-full">
        <img
          src="/images/service_banner.png"
          alt=""
          srcset=""
          className="h-full w-full object-cover"
        />
        <div className="absolute  2lg:top-[40%] smMd:-top-10 sm:-top-44 -top-[18rem] left-0 ps-16 xxlg:w-[813px] smMd:w-[560px] w-[90%]">
          <h1 className={` xxlg:text-[60px] text-[30px] smMd:text-[40px] text-white ${LibreBaskerville}`}>Dont settle for anything less than the best!</h1>
          <p className={`xxlg:text-base text-white text-xs smMd:text-sm ${archivo300} mt-3`}>
            Elevate your next event with the ultimate experience of luxury,
            safety, and reliability with Masterpiece Limousine. Our exceptional
            customer service and affordable prices are unmatched, making every
            trip unforgettable. Whether its a wedding, corporate event, or a
            night out on the town, weve got you covered. Dont wait any longer;
            contact us today and book your luxury transportation!
          </p>
         <div className="flex w-full justify-center items-center mt-10">
         <button className="bg-crimson mt- text-white xxlg:px-16 xxlg:py-4 xxlg:text-base px-14 me-5 py-3 outline-none">RESERVE NOW</button>
         </div>
        </div>
      </div>
    </>
  );
}

export default CustomerService;
