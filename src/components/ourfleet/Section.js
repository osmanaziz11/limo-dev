import React from "react";
import Button from "./Button";
import Image from "next/legacy/image";

const Section = ({ order, textContent, title, imgURL, blurImg }) => {
  return (
    <div
      className={`flex h-auto flex-col sm:flex-col md:flex-col lg:flex-row ${
        order === "left" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`relative flex h-auto items-stretch 320:h-[500px] sm:w-full md:h-[930px]  md:w-full lg:h-auto lg:w-[50%] 1440:h-auto 2xl:h-auto ${
          order === "right" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <Image src={imgURL} blurDataURL={blurImg} layout="fill" />
      </div>
      <div
        className={`flex h-auto w-full flex-col items-center bg-black 320:h-[500px] sm:w-full md:h-[930px] md:w-full lg:h-auto lg:w-[50%] lg:justify-center 1440:h-auto 2xl:h-auto ${
          order === "right" ? "lg:order-2" : "lg:order-1"
        } flex-1 overflow-hidden`}
        data-aos="zoom-in"
      >
        <h1 className="font-Montserrat lg: my-16 text-center text-[24px] font-medium uppercase tracking-[7px] text-white md:my-14 1024:mb-10 2xl:my-24 2xl:text-[40px]">
          {title}
        </h1>
        {textContent.map((text, index) => (
          <React.Fragment key={index}>
            <p className="font-Archivo mx-14 text-center text-[12px] text-white md:mx-20 md:text-[14px] 1024:mx-14 1024:text-[15px] 2xl:text-[25px]">
              {text}
            </p>
            {index < textContent.length - 1 && <br />}
          </React.Fragment>
        ))}
        <Button />
      </div>
    </div>
  );
};

export default Section;
