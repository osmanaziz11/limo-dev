import { archivo300, leagueSpartan700 } from "@/util/fonts";
import React from "react";

function BannerContent() {
  return (
    <div className="absolute  right-[4.5%] top-[67%] z-[3] flex  translate-x-[-4.5%] translate-y-[-60%] flex-col items-end xs:top-[62%] xl:top-[57%] xl:translate-y-[-59%]  xxlg:top-[57.4%]" >
      <h1
        className={`text-right text-[33px] uppercase leading-[0] text-white drop-shadow-md xs:text-[35px] sm:text-[50px] smMd:text-[65px] 2lg:text-[90px] 2xxlg:text-[110px] 3xxlg:text-[130px]  ${leagueSpartan700}`}
      >
        San Diego
      </h1>
      <h1
        className={`text-right text-[33px] uppercase leading-[1.5] text-white drop-shadow-md xs:text-[35px] sm:text-[50px] smMd:text-[65px] 2lg:text-[90px] xxlg:leading-[1.6] 2xxlg:text-[110px] 3xxlg:text-[130px]  ${leagueSpartan700}`}
      >
        Limousine
      </h1>
      <h1
        className={`text-right text-[33px] uppercase leading-[0] text-white drop-shadow-md xs:text-[35px] sm:text-[50px] smMd:text-[65px] 2lg:text-[90px] 2xxlg:text-[110px] 3xxlg:text-[130px]  ${leagueSpartan700}`}
      >
        Service
      </h1>

      <div className="mr-[5px]  mt-[21px] flex w-[178px] flex-col items-end justify-end transition-all sm:w-[250px] smMd:mt-[40px]   smMd:w-[300px]  2lg:mt-[60px] 2lg:w-[344px] 2xxlg:w-[565px] 3xxlg:mt-[98px]">
        <h1
          className={`p-0 text-end text-[7px] leading-[1.1] text-[#e9dede] sm:pl-3 sm:text-[10px] smMd:text-[12px] 2lg:text-[13px] 2xxlg:text-[21px] ${archivo300}`}
        >
          Offering luxury transportation options for any occasion. We have a
          vehicle to fit your needs, from stylish limousines to spacious party
          buses. Our professional chauffeurs have local knowledge and provide
          top-notch service to make your experience unforgettable.
        </h1>

        <p
          className={`m-0 pl-[2px] text-right text-[7px] leading-[1.1] text-[#e9dede] sm:text-[10px] smMd:text-[12px] 2lg:pl-[20px] 2lg:text-[13px] 2xxlg:pl-[42px] 2xxlg:text-[21px] ${archivo300} mt-[8px] `}
        >
          So choose us for an elegant and memorable transportation experience.
        </p>
      </div>
    </div>
  );
}

export default BannerContent;
