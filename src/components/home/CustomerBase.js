/* eslint-disable @next/next/no-img-element */
import React from "react";
import { image_urls } from "@/util";
import { RightArrow } from "@/assets/icons";
import { libre400, montserrat400 } from "@/util/fonts";

function CustomerBase() {
  const Montserrat = montserrat400;
  const LibreBaskerville = libre400;
  const images = image_urls.CustomerBase;
  const clients = new Array(14).fill(null);

  const primaryHeading = `text-center xxlg:text-[60px] text-[40px] xs:px-10 text-white ${LibreBaskerville}`;
  const secondaryHeading = `mx-2 text-lg uppercase tracking-[10px] text-[#a9a8a7] ${Montserrat}`;
  

  return (
    <div>
      <div className="mb-10">
        <h1 className={primaryHeading}>Our prized customer base</h1>
      </div>

      <div className="p-5 px-10 sm:px-14 lg:px-80 xxlg:customer-base-xxlg xs:customer-base customer-base-xxs">
        {clients.map((_, idx) => {
          return (
            <img
              key={idx}
              src={images[`Logo${idx + 1}`]}
              alt=""
              className="xxlg:h-auto h-[120px]"
            />
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-center">
        <h1 class={secondaryHeading}>View All</h1>
        <RightArrow width={24} height={24} />
      </div>
    </div>
  );
}

export default CustomerBase;
