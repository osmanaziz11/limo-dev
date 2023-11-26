import { Luggage, People } from "@/assets/icons";
import { leagueSpartan700, montserrat500, montserrat600 } from "@/util/fonts";
import React from "react";

function VehicelCard({ name, src, passenger, luggage }) {
  return (
    <div className=" relative mx-14 inline-flex h-[380px] w-[350px] flex-col justify-between bg-[#FAC30F] px-2 py-2 shadow-lg">
      <div className="flex justify-between">
        <h1 className={`text-xl ${leagueSpartan700} uppercase`}>{name}</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-between">
            <People width={15} height={20} />
            <p className={`ms-2 text-xs ${montserrat600} text-center`}>30</p>
          </div>
          <div className="flex items-center justify-between">
            <Luggage width={20} height={15} />
            <p className={`ms-2 text-xs ${montserrat600} text-center`}>10</p>
          </div>
        </div>
      </div>
      <div className="absolute left-[-20%] top-[50%] max-h-full  w-[470px] translate-y-[-50%] bg-transparent bg-opacity-60 object-cover">
        <img src={src} alt="" srcset="" className="h-[100%] w-[100%]" />
      </div>
      <div className=" flex justify-between px-2">
        <button
          className={`text-xs uppercase text-white ${montserrat500} w-[48%] bg-black px-5 py-[10px]`}
        >
          get quote
        </button>
        <button
          className={`text-xs uppercase text-white ${montserrat500} w-[48%] bg-black px-5 py-[10px]`}
        >
          select
        </button>
      </div>
    </div>
  );
}

function VehicleSlider() {
  const vehicles = [
    {
      src: "https://res.cloudinary.com/ozecloud/image/upload/q_auto:best/v1700973068/5285bbfa11cd36afc8240e0e0c92eeb7_e6amoh.webp",
      name: "30 Pax Limo Bus",
      passengers: 30,
      luggage: 10,
    },
    {
      src: "https://res.cloudinary.com/ozecloud/image/upload/q_auto:best/v1700973067/cdc5f41b2313d91cddcc5c9077ceabfb_bpub8i.webp",
      name: "30 Pax Limo Bus",
      passengers: 30,
      luggage: 10,
    },
    {
      src: "https://res.cloudinary.com/ozecloud/image/upload/q_auto:best/v1700973068/5285bbfa11cd36afc8240e0e0c92eeb7_e6amoh.webp",
      name: "30 Pax Limo Bus",
      passengers: 30,
      luggage: 10,
    },
  ];
  return (
    <div className="absolute left-0 top-[55%]  flex w-full  translate-y-[-55%] items-center justify-center ">
      <div class="no-scrollbar h-full  w-[100%] overflow-scroll whitespace-nowrap ">
        {vehicles.map((vehicle, idx) => {
          return <VehicelCard key={idx} {...vehicle} />;
        })}
      </div>
    </div>
  );
}

export default VehicleSlider;
