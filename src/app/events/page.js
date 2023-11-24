/* eslint-disable @next/next/no-img-element */
import {
  leagueSpartan700,
  libre400,
  montserrat400,
  montserrat600,
} from "@/util/fonts";
import { News, image_urls } from "@/util";
import React from "react";
import { NewsCard } from "@/components/common";
import { RightArrow, SearchIcon } from "@/assets/icons";

function HeadingRow() {
  const heading = `text-4xl uppercase text-white sm:text-6xl md:text-7xl ${leagueSpartan700}`;
  const para = `text-[15px] text-white sm:mt-2 sm:text-[27px] md:text-[29px] ${libre400}`;
  return (
    <div class="absolute top-0 flex h-[100%] w-full flex-col items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent md:justify-start md:pt-56">
      <h1 className={heading}>the latest</h1>
      <p className={para}>Masterpiece Limousines in action.</p>
    </div>
  );
}

function Search() {
  return (
    <div className="flex h-14 w-full items-center justify-between bg-[#16181A] px-2">
      <input
        type="search"
        name=""
        id=""
        className="h-[100%] w-[80%] border-0 bg-transparent px-3 outline-none"
        placeholder="Search"
      />
      <SearchIcon />
    </div>
  );
}

const Row = ({ idx }) => {
  return (
    <div className="mb-2 flex justify-between pt-2">
      <h1 className={`text-7xl ${leagueSpartan700} px-5 text-white`}>
        {idx + 1}
      </h1>
      <p className={`text-xs text-white ${montserrat400}`}>
        COMIC-CON SDCC 2016 LIMOUSINE RENTAL SERVICE SAN DIEGO
      </p>
    </div>
  );
};

function Posts() {
  const content = new Array(4).fill(null);

  return (
    <div className="mt-10 bg-[#2189b7] bg-opacity-60 px-5 py-2">
      <p
        className={`mb-2 text-center text-sm uppercase tracking-[8px] text-white ${montserrat400}`}
      >
        top posts
      </p>
      <div class="mt-10">
        {content.map((_, idx) => (
          <Row key={idx} idx={idx} />
        ))}
      </div>
    </div>
  );
}

function Filters({ year, filters }) {
  return (
    <div className="mb-10">
      <p className={`text-sm text-white ${montserrat600} flex items-center`}>
        <div className="mb-2 me-3 rotate-90">
          <RightArrow width={15} height={15} />
        </div>{" "}
        {year}
      </p>
      <ul className="list-disc pl-12 text-white">
        {filters.map((filter, idx) => {
          return (
            <li key={idx + filter.name}>
              <p className={`text-xs uppercase ${montserrat400}`}>
                {filter.name}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AllTime() {
  const filterArray = new Array(3).fill({
    year: "2023",
    filters: [
      { name: "JUNE" },
      { name: "JULY" },
      { name: "AUGUST" },
      { name: "SEPTEMBER" },
      { name: "NOVEMEBER" },
    ],
  });
  return (
    <div className="mt-10 bg-[#16181A] px-10  py-4">
      <p
        className={`mb-2 text-center text-sm uppercase tracking-[8px] text-white ${montserrat400}`}
      >
        all time
      </p>
      <div className="mt-10">
        {filterArray.map((filter, idx) => {
          return <Filters key={idx} {...filter} />;
        })}
      </div>
    </div>
  );
}

function Events() {

  const newsContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "10px",
  };

  return (
    <div className="relative max-w-[1349px] min-h-[1500px]">
      <img src={image_urls.events_banner} alt="events-banner" className="" />

      {/* the heading row  */}
      <HeadingRow />

      {/* the content  */}
      <div
        className="absolute top-[200px] w-full   lg:px-10 px-5  xxs:top-[300px] sm:top-[400px] grid md:grid-cols-3 sm:grid-cols-2 gap-5"
       
      >
        {/* left corner  */}
        <div class="  col-span-1">
          <Search />
          <Posts />
          <AllTime />
        </div>

        {/* right corner  */}
        <div class="h-[600px] md:col-span-2 col-span-1" style={{ ...newsContainer }}>
          {News.map((_, idx) => {
            return (
              <div key={idx} className="mb-5">
                <NewsCard {..._} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
