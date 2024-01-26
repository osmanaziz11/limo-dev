import React from "react";
import Image from "next/legacy/image";

const Section = ({
  order,
  textContent,
  heading,
  imgURL,
  blurImg,
  aos,
  color,
  number,
}) => {
  const totalIcons = 17;

  const filledIcons = Array.from(
    { length: Math.min(number, totalIcons) },
    (_, i) => i,
  );

  const unfilledIcons = Array.from(
    { length: totalIcons - filledIcons.length },
    (_, i) => i,
  );
  return (
    <>
      <div
        className={`flex w-full justify-center bg-black 320:mt-10 768:mt-0 1024:h-[720px] 1440:h-[780px] 2xl:h-[980px] ${
          order === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <div
          className={`flex w-full flex-col items-center 320:h-[1250px] 425:h-[1250px] sm:flex-row 768:h-[1480px] md:w-full md:flex-col 1024:h-[600px] ${
            order === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* 1st */}
          <div
            className={`bg-${color} flex w-full flex-col text-white 320:items-center 320:gap-4 320:py-5 1024:h-[600px] 1440:h-[680px] 2xl:h-[700px] ${
              order === "right" ? "lg:pl-14 lg:pr-12" : "lg:pl-12 lg:pr-14"
            }`}
          >
            {/* number and logo */}
            <div className="grid items-center 320:grid-cols-1 768:grid-cols-1 1024:w-full 1024:grid-cols-2">
              <div className="flex lg:justify-start">
                <h1
                  className={`font-Leaguespartan mb-1 flex text-[70px] font-bold leading-[76.6%] 320:flex-row`}
                  data-aos={aos}
                >
                  {`${number}`}
                </h1>
              </div>
            </div>

            {/* heading */}
            <h1
              className={`font-Archivo mb-1 font-[400] italic 320:text-[20px] 1024:w-full 1024:text-[35px]`}
              data-aos={aos}
            >
              {`${heading}`}
            </h1>

            {/* texts */}
            <div
              className={`flex flex-col text-center sm:h-full 1024:text-left`}
              data-aos={aos}
            >
              {textContent.map((text, index) => (
                <React.Fragment key={index}>
                  <p className="font-Archivo 320:mx-4 320:text-[12px] 320:leading-[17.8px] 768:mx-16 768:text-[13px] 1024:mx-0 1024:text-[14px] 1024:font-[300] 1024:leading-[16px] 1440:text-[16px] 1440:font-[300] 1440:leading-[18.8px] 2xl:text-[26px] 2xl:leading-[28.8px]">
                    {text}
                  </p>
                  {index < textContent.length - 1 &&
                    (number !== "17" ? <br /> : null)}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* second */}
          <div
            className="relative order-2 w-full 320:mt-6 320:h-[860px] 320:p-4 sm:order-2 sm:w-[80%] 1024:h-[660px] 1024:w-[640px] 1024:p-0 1440:w-[700px] 2xl:h-[760px] 2xl:w-[800px]"
            data-aos="zoom-in"
          >
            <Image src={`${imgURL}`} blurDataURL={`${blurImg}`} layout="fill" />
          </div>

          {/* third */}
          <div
            className={`bg-${color} order-3 flex w-[6%] flex-col items-center justify-center 320:hidden sm:flex 768:hidden 1024:flex 1024:h-[600px] 1024:w-[8%] 1440:h-[680px]
          1440:w-[8%] 2xl:h-[700px]`}
          >
            {filledIcons.map((index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="28"
                viewBox="0 0 22 34"
                fill="white"
                stroke="white"
                strokeWidth="2"
                style={{ margin: index % 2 === 0 ? "0px" : "-10px" }}
              >
                <path d="M1.99822 32.1138L2.22499 15.1476L20.0017 2.06227L19.775 19.0284L1.99822 32.1138Z" />
              </svg>
            ))}
            {unfilledIcons.map((index) => (
              <svg
                key={index}
                xmlns="http://w3.org/2000/svg"
                width="16"
                height="28"
                viewBox="0 0 22 34"
                fill="none"
                stroke="white"
                strokeWidth="2"
                style={{ margin: index % 2 === 0 ? "-10px" : "0px" }}
              >
                <path d="M1.99822 32.4644L2.22499 15.4983L20.0017 2.41292L19.775 19.379L1.99822 32.4644Z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
