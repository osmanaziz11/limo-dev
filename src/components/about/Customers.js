import React from "react";
import Text from "./Text";

const texts = [
  "Evofem Biosciences",
  "General Atomics",
  "Cadence Travel",
  "One Call Medical",
  "Cohn Restaurant Group",
  "Diageo Beer Company",
  "ETA Executive Services",
  "Allied Crew Transportation",
  "Southern Wine & Spirits",
  "Showtime University of California San Diego",
  "Texas Roadhouse",
  "Awaken Church",
  "Toyota",
  "DJO Global",
  "Stryker",
  "Jacobs Investment Company LLC",
  "Crest Beverage",
  "Bo-Beau Kitchen & Bar",
  "Corvette Diner Blarney Stone Pub",
  "Courtesy Chevrolet",
  "John Boggs & Associates",
  "San Diego State University",
  "Sycuan Casino",
  "Russell Westbrook Enterprises",
  "Eddie V's",
  "Chick-Fil-A",
  "Ronald McDonald House",
  "Lexus Qualtech",
  "Frosch",
  "Discount Tire",
  "Procopio Cory Hargreaves & Savitch LLP",
  "Travelworld International Group",
  "Billy Gene Marketing INC",
  "Higgs Fletcher and Mack",
  "Digitech",
  "iHeart Radio",
  "Make a Wish Foundation",
  "Proximo Spirits",
  "Slater's 50/50",
  "The Dana Hotel",
  "Sandbar",
  "Qualcomm",
  "American Wine & Spirits",
  "Jacobs and Cushman San Diego Food Bank",
  "Cartoon Network & Adult Swim",
  "State Farm Insurance",
  "SunTrust Bank",
  "Pacific Wine & Spirits",
  "Jeld-Wen Inc.",
  "San Diego Humane Society",
  "BioAtla",
  "Jägermeister",
  "ForeViva Medical Clinique",
  "Carey Meetings & Events",
  "Regal Entertainment Group",
  "Mercedes Benz",
  "Callaway Golf Odyssey",
];

const Customers = () => {
  return (
    <>
      <div
        className="bg-cover bg-center pb-7 text-center"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/ecd8/7fcf/9c15489107edfb6bf9b59148150fa7f2?Expires=1701043200&Signature=lpiCoAb1NdPSsda33orF2gIyPZYnOKNU~SW~~3f8CfDZkvbCREcLj4aFIZTHB3sWpvGqKQf3-XwZhZwHVxSo-v87gAtolSmAbV0g6zVxxYR44xMHBsNWiqxQJr5uL8WZ4ceiQ7Heal6Ft3oZsFKTS1K~Mh7iZX6IQBfjwb1Y3LmaXZfJacNnOtD3abPM2cI5vjy9ClKilw7UsQ8dKSIZ6HebJMbJSBxypC17Yk3ydN7MM6Ua36NEIx1GtcmfHUfQ0olVdl2GPMAG~M1YSfY3IqXbVJW-ZA~n6dfTUNBdNBzG694wUGwFN7XjJo5FZXM3iHL~zVI5xhWEUIxXtjcMDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
        }}
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="90"
            viewBox="0 0 100% 90"
            fill="none"
          >
            <path
              d="M1920 150L0 150L1.9233e-05 -5.06498e-09L1920 0.000167847L1920 150Z"
              fill="url(#paint0_linear_221_296)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_221_296"
                x1="960"
                y1="8.57959e-05"
                x2="960"
                y2="113.046"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <p className="font-librebaskerville 425:text-[18px] 768:text-[25px] 1024:text-[30px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[15px] font-[300] italic leading-normal text-white 2xl:text-[54px]">
            Our prized customer base
          </p>
        </div>

        <div className="1440:gap-8 grid grid-cols-1 gap-6 p-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:gap-11 2xl:p-9">
          {texts.map((text, index) => (
            <Text key={index} text={text} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Customers;
