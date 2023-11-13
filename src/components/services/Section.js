import React from "react";

const Section = ({ order, textContent, title, imgURL, color, number, img }) => {
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
        className={`flex h-[828px] w-full items-center justify-center bg-black ${
          order === "left" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className={`bg-${color} flex h-[600px] w-full`}>
          <div
            className={`flex w-full items-center justify-center text-white  ${
              order === "left" ? "flex-row-reverse pr-12" : "flex-row pl-12"
            }`}
          >
            <div>
              <div className="grid grid-cols-2">
                <div className="flex justify-start">
                  <h1
                    className={`font-Leaguespartan mb-1 flex text-[70px] font-bold leading-[76.6%] ${
                      order === "left" ? "pl-12" : ""
                    }`}
                  >{`${number}`}</h1>
                </div>
                <div className="mr-8 flex justify-end">
                  <img src={`${img}`} alt="" class="h-[60px] w-[60px]" />
                </div>
              </div>
              <h1
                className={`font-Archivo mb-1 text-[35px] font-[400] italic ${
                  order === "left" ? "pl-12" : ""
                }`}
              >{`${title}`}</h1>

              <div className={`${order === "left" ? "pl-12" : "pr-10"}`}>
                {textContent.map((text, index) => (
                  <React.Fragment key={index}>
                    <p className="font-Archivo text-[14px] font-[300] leading-[19.8px]">
                      {text}
                    </p>
                    {index < textContent.length - 1 &&
                      (number !== "17" ? <br /> : null)}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <img src={`${imgURL}`} alt="" className="h-[660px] w-[420px]" />
          </div>
        </div>
        <div
          className={`bg-${color} flex h-[600px] w-[5%] flex-col items-center justify-center`}
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
    </>
  );
};

export default Section;
