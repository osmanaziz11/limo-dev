"use client";
import { useState } from "react";
import { montserrat400 } from "@/util/fonts";
import VehicleSlider from "./VehicleSlider";

function StepTwoContent({ activeTab }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtersArray = [
    { name: "all" },
    { name: "sedan" },
    { name: "suv" },
    { name: "coupe" },
  ];

  function Filters() {
    return (
      <ul className="flex w-full items-center justify-center p-7">
        {filtersArray.map((filter, idx) => {
          return (
            <>
              <li
                key={idx}
                className={`text-xs ${
                  activeFilter === filter.name ? "text-[#FAC30F]" : "text-white"
                } ${montserrat400} mx-4 uppercase`}
              >
                {filter.name}
              </li>
              <p className="text-white">
                {" "}
                {idx + 1 === filtersArray.length ? "" : "/"}
              </p>
            </>
          );
        })}
      </ul>
    );
  }

  const classes = `${
    activeTab === 2 ? "h-[600px]" : "h-0"
  } w-full overflow-hidden bg-transparent transition-all relative   ease-out`;

  return (
    <div className={classes}>
      {/* Filters  */}
      <Filters />
      {/* Slider  */}
      <VehicleSlider activeFilter={activeFilter} />
    </div>
  );
}
export default StepTwoContent;
