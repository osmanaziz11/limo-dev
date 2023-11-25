import React from "react";
import Image from "next/legacy/image";

const servicesData = [
  "Gold Key Concierge",
  "Airport Transfers",
  "Executive Ground Transportation",
  "Tijuana/CBX Airport Services",
  "Temecula Wine Tours",
  "Wedding Limousine Transportation",
  "San Diego Brewery Tours",
  "Concert Limo Services",
  "Mexico Limousine Tours",
  "Bachelor & Bachelorette Parties",
  "SoCal Casino Limo Services",
  "Del Mar Races Limousine Service",
  "Graduation Limo Services",
  "Sporting Event Transportation",
  "Prom Night Limousine Services",
  "Quinceañera Limousine Service",
  "Nightclub Limo Service",
  "School Event Limo Services",
];

const Hero = () => {
  return (
    <>
      <div className="relative 320:mb-2 768:mb-12 1024:mb-32">

        <div className="relative w-full 320:h-[220px] 375:h-[290px] 425:h-[280px] 768:h-[550px] 1024:h-[830px] 1440:h-[1000px] 2xl:h-[1870px]">
          <Image
            src="https://res.cloudinary.com/dyjirwjvp/image/upload/q_60/v1700848233/image_6_xnlnzr.png"
            blurDataURL="https://res.cloudinary.com/dyjirwjvp/image/upload/e_blur:100,q_10/v1700848233/image_6_xnlnzr.png"
            layout="fill"
          />
        </div>
        <div className="absolute left-[3%] top-[21%] 320:left-[5%] 425:top-[25%] 768:top-[23%] 1024:top-[23%] 1440:left-[5%] 1440:top-[23%] 2xl:top-[24%] 2xl:left-[6%]">

          <h1 className="font-Leaguespartan font-[700] -tracking-tighter text-white 320:text-[12px] 320:leading-[11px] 768:text-[55px] 768:leading-[44px] 1024:text-[66px] 1024:leading-[52px] 1440:text-[90px] 1440:leading-[73px] 2xl:text-[142px] 2xl:leading-[115px]">
            EXCLUSIVE
            <br />
            SERVICES
          </h1>
          <ul className="320:mt-2 320:space-y-1.5 768:space-y-4 768:mt-5 1024:space-y-[20px] 1024:mt-8 1440:space-y-6 1440:mt-8 2xl:space-y-12 2xl:mt-16">
            {servicesData.map((service, index) => (
              <li
                key={index}
                className=" text-white text-shadow-md font-Montserrat font-bold uppercase italic leading-normal 320:text-[4.5px] 320:leading-[1.2px] 320:tracking-[1.6px] 768:text-[12px] 768:leading-[0.8px] 768:tracking-[3.6px] 1024:text-[15px] 1024:leading-[3.5px] 1024:tracking-[5px] 1440:text-[21px] 1440:leading-[6px] 1440:tracking-[6px] 2xl:text-[35px] 2xl:leading-[4.6px] 2xl:tracking-[7px]"
              >
                + {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;



// import React from "react";

// const Hero = () => {
//   return (
//     <>
//       <div class="relative">
//         <img
//           src="https://s3-alpha-sig.figma.com/img/2753/fb0f/48dd7a4e69830e52bf9c440c03b9a7dc?Expires=1701043200&Signature=NtB7uvLto28k9tLHIbupALSrRT0yfLD8mFj4u8ft~vutOzaTZh-ZrePS84fn8bWjrjPXO2scoFGneTzGpmEKsqzDfNf0U2GXq~KNg~XEgR7hIXeAI7gUeNTNT~laNaL7sKfwI2~f9IJiugKpFkNM2r-0jyaDP8T1T3vPhKlZpCraEc34PiiAGQuQcrUKYAzPW1uMmAyln3fJzcGm62TlGxqzICQYQagVNlYykepzE~J9g206ZgnK54e0y6TGkqrreoboVjEF9NQPgTI6fK1SP1YimUXDfi3Vb57GZoIexNqsX7gL1f0oRPkpUb4uwatGt6lPtngFon3r9uJtS3pzNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
//           alt=""
//           class="h-auto w-full max-w-full"
//         />
//         <div class="absolute left-[3%] top-[23%] sm:text-left">
//           <h1 class="font-Leaguespartan text-5xl font-extrabold -tracking-tighter text-white sm:text-2xl md:text-7xl">
//             EXCLUSIVE
//             <br />
//             SERVICES
//           </h1>
//           <ul className="mt-6 space-y-2.5">
//             <li className="text-shadow-md font-Montserrat text-[14px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Gold Key Concierge
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[14px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Airport Transfers
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Executive Ground Transportation
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Tijuana/CBX Airport Services
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Temecula Wine Tours
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Wedding Limousine Transportation
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + San Diego Brewery Tours
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Concert Limo Services
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Mexico Limousine Tours
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Bachelor & Bachelorette Parties
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + SoCal Casino Limo Services
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Del Mar Races Limousine Service
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Graduation Limo Services
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Sporting Event Transportation
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Prom Night Limousine Services
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Quinceañera Limousine Service
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + Nightclub Limo Service
//             </li>
//             <li className="text-shadow-md font-Montserrat text-[16px] font-bold uppercase italic leading-normal tracking-[3.6px] text-white">
//               + School Event Limo Services
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;
