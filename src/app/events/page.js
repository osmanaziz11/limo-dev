/* eslint-disable @next/next/no-img-element */
import {
  leagueSpartan700,
  libre400,
  montserrat400,
  montserrat600,
} from "@/util/fonts";
import { News, limitAndConcat } from "@/util";
import React from "react";
import { RightArrow, SearchIcon } from "@/assets/icons";
import { homeURL } from "@/util/urls";
import Image from "next/legacy/image";

function HeadingRow() {
  const heading = `text-4xl uppercase text-white sm:text-6xl md:text-7xl ${leagueSpartan700}`;
  const para = `text-[15px] text-white sm:mt-2 sm:text-[27px] md:text-[29px] ${libre400}`;
  return (
    <div class=" top-0 mb-10 flex h-[250px] w-full flex-col items-center justify-end sm:mb-0 sm:h-[400px] sm:justify-center  md:justify-start md:pt-56">
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

const NewsCard = ({ idx, title, desc, time, width = false }) => {
  const container = `xs:mr-5 xs:h-[495px]  flex-col whitespace-normal bg-black  ${
    width ? "" : ""
  }`;
  return (
    <div className={container}>
      <div class="relative h-[180px] w-full xs:h-[300px]">
        <Image
          src={homeURL.news1}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="grayscale filter"
          blurDataURL={`${homeURL[`news${idx + 1}`]}Blur`}
        />
      </div>
      <div class="flex flex-col border-l-2  border-l-[#A72211]  px-3">
        <h1 className="py-2 text-center  text-white xxlg:text-[22px]">
          {title}
        </h1>
        <p className="text-start text-sm text-[#a9a8a7] xxlg:text-[17px]">
          {limitAndConcat(desc, 200, 200)}
        </p>
        <p className="mt-2 text-end text-[#a9a8a7]">{time}</p>
      </div>
    </div>
  );
};

function Events() {
  const newsContainer = {
    gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))",
    gap: "0px",
  };

  return (
    <div className="relative flex w-full  flex-col  items-center justify-center">
      <img
        src="https://res.cloudinary.com/ozecloud/image/upload/q_auto:best/v1700968369/f768d297837638be1b32d563fd928951_k8f1af.webp"
        alt="events-banner"
        className="bg-gradient-to-bottom absolute left-0 top-0 -z-10 h-full w-full from-black via-transparent to-transparent object-cover blur-sm"
      />
      <HeadingRow />

      <div className=" mb-32 flex w-full max-w-[2000px] flex-col   gap-5   px-3 xs:px-10 sm:px-32 smMd:flex-row smMd:px-5">
        {/* left corner  */}
        <div class="  mt-5 smMd:w-1/3 xl:w-1/4">
          <Search />
          <Posts />
          <AllTime />
        </div>

        {/* right corner  */}
        <div
          class=" xs:grid smMd:w-[70%] xl:w-[75%]"
          style={{ ...newsContainer }}
        >
          {News.map((_, idx) => {
            return (
              <div key={idx} className="mt-5 xs:mb-5">
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

{
  /* <div>
<img
  src="https://res.cloudinary.com/ozecloud/image/upload/q_auto:best/v1700968369/f768d297837638be1b32d563fd928951_k8f1af.webp"
  alt="events-banner"
  className=""
/>

{/* the heading row  */
}
{
}

{
  /* the content  */
}
{
  /* <div className="absolute top-[200px] grid w-full gap-5  px-5 xxs:top-[300px] sm:top-[400px] sm:grid-cols-2 md:grid-cols-3 lg:px-10">
  {/* left corner  */
}

// </div>
// </div> */} */}
