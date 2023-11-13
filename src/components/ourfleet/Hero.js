import React from "react";

const Hero = () => {
  return (
    <>
      <img
        src="/ourfleet/hero/fleet-banner.png"
        alt="Background Image"
        className="h-auto w-full"
      />
      <div className="flex items-center bg-black">
        <div className="w-[35%] pb-20">
          <div className="flex h-full flex-col">
            <h1 className="font-league-spartan pl-32 text-[110px] font-[700] tracking-[10px] text-white">
              THE FLEET
            </h1>
            <p className="font-Archivo w-full justify-center px-28 text-[26px] leading-[32px] text-white">
              Experience safe and reliable Luxury Ground Transportation with our
              professional chauffeurs at Masterpiece Limousine. We are fully
              licensed and insured for your peace of mind, and our fleet of
              vehicles is perfect for any occasion, whether it's a corporate
              event or a special occasion. Let us take care of the driving while
              you sit back, relax, and enjoy the comfort and sophistication of
              our luxury ground transportation services.
            </p>
          </div>
        </div>
        <div className="pb-18 flex-grow">
          <div className="flex w-full items-center justify-center">
            <img
              src="/ourfleet/hero/benz.png"
              alt=""
              className="h-[197px] w-[500px]"
            />
            <img
              src="/ourfleet/hero/ford.png"
              alt="Background Image"
              className="h-[197px] w-[500px]"
            />
            <img
              src="/ourfleet/hero/cad.png"
              alt="Background Image"
              className="h-[197px] w-[500px]"
            />
          </div>
          <div className="flex w-full justify-center">
            <img
              src="/ourfleet/hero/lincoln.png"
              alt="Background Image"
              className="h-[197px] w-[500px]"
            />
            <img
              src="/ourfleet/hero/chev.png"
              alt="Background Image"
              className="h-[197px] w-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
