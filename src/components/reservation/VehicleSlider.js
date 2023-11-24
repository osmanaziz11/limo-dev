import { Luggage, People } from "@/assets/icons";
import { leagueSpartan700, montserrat500, montserrat600 } from "@/util/fonts";
import React from "react";

function VehicelCard({ name, src, passenger, luggage }) {
  return (
    <div className=" h-[380px] w-[350px] bg-[#FAC30F] px-2 py-2 inline-flex mx-14 flex-col justify-between relative shadow-lg">
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
      <div className="absolute top-[50%] translate-y-[-50%] left-[-20%]  max-h-full w-[470px] bg-transparent bg-opacity-60 object-cover">
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
      src: "https://s3-alpha-sig.figma.com/img/a5a8/2134/5285bbfa11cd36afc8240e0e0c92eeb7?Expires=1700438400&Signature=KjhRpngLLcD-oJ~4sXoNSLEoqS7ky8h1N8MSYgeWjJDqt2voOT3fLRN3VikpTKEgPuH6ieVJx3PHa5zKSK~0mLRuFsauuMv-RmMHOw6eZXGS5fAlkq9FmLVgLY9NNAygomOdDrMj2o5WkCxliWYdWoOEiyekkrKMVSxBaVc8CVQIH0hpSoTHx~qYphHFuNyL0EyuHvc6bgbdycH3a78J5U~bvYvQbL7ST9ePKXcfIBhNoC4HC5YgacKQohpfZ4FwfP8YFcnZZo3FphsTGrwI6Zur~mwlmA9XlGkkLwGyFlEQ9lxUOxGz54mnhZwBH8gNBPI3UuIBpHW3jzdvAVeyCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "30 Pax Limo Bus",
      passengers: 30,
      luggage: 10,
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/a10d/63eb/cdc5f41b2313d91cddcc5c9077ceabfb?Expires=1700438400&Signature=hQ2Yovx-i03AhKFKUU4OJcGzj~tLy7HnjbfRdingkNy5IOC0KuBEGokXaza2LjCMbQg7jLpG6W4lRLN6hg7zXKADP7sfiY4kxLQVMvBbRBFDCpfR6z8uXMpzXhE4CPQ1DMQIYR8T-SlYGIkQfgmgAAGZAQo5w8irjsFmXSouQimmTbDVVM0~7hYyBsAaAIyhxm50sJJXMRQlm-tsdVzHycnvYMiXxVYhyPvlN8wp5CaHdDbFjzn~qSBquPMOPEPUSCX7SMJhErangJhdx9TDRKZ8klwJ7AVsBf3GhXLD3YtswhQDaDhEdcvuIv0Cw-tVPPG2wfyeVSC0w21OWrB0PQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "30 Pax Limo Bus",
      passengers: 30,
      luggage: 10,
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/a10d/63eb/cdc5f41b2313d91cddcc5c9077ceabfb?Expires=1700438400&Signature=hQ2Yovx-i03AhKFKUU4OJcGzj~tLy7HnjbfRdingkNy5IOC0KuBEGokXaza2LjCMbQg7jLpG6W4lRLN6hg7zXKADP7sfiY4kxLQVMvBbRBFDCpfR6z8uXMpzXhE4CPQ1DMQIYR8T-SlYGIkQfgmgAAGZAQo5w8irjsFmXSouQimmTbDVVM0~7hYyBsAaAIyhxm50sJJXMRQlm-tsdVzHycnvYMiXxVYhyPvlN8wp5CaHdDbFjzn~qSBquPMOPEPUSCX7SMJhErangJhdx9TDRKZ8klwJ7AVsBf3GhXLD3YtswhQDaDhEdcvuIv0Cw-tVPPG2wfyeVSC0w21OWrB0PQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "30 Pax Limo Bus",
      passengers: 30,
      luggage: 10,
    },
   
  ];
  return (
    <div className="absolute left-0 top-[55%]  w-full translate-y-[-55%]  flex justify-center items-center ">
        
      <div class="w-[100%] h-full  whitespace-nowrap overflow-scroll no-scrollbar ">
      {vehicles.map((vehicle, idx) => {
        return <VehicelCard key={idx} {...vehicle} />;
      })}
      </div>
    </div>
  );
}

export default VehicleSlider;
