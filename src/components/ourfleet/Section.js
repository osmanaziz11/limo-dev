import React from "react";
import Button from "./Button";

const Section = ({ order, textContent, title, imgURL }) => {
  return (
    <div
      className={`flex flex-wrap ${
        order === "right" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`w-full sm:w-full md:w-full lg:w-1/2 ${
          order === "left" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <img src={imgURL} alt="Image" className="h-full w-full" />
      </div>
      <div
        className={`flex w-full flex-col items-center justify-center border-gray-100 bg-black sm:w-full sm:p-24 md:w-full md:p-32 lg:w-1/2 ${
          order === "right" ? "lg:order-2" : "lg:order-1"
        } lg:pt-20`}
      >
        <h1 className="font-Montserrat mb-24 pt-32 text-center text-[33px] font-medium uppercase tracking-[14px] text-white">
          {title}
        </h1>

        {textContent.map((text, index) => (
          <React.Fragment key={index}>
            <p className="font-Archivo px-5 text-center text-[24px] text-white">
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
