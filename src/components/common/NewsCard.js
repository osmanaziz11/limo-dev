import { limitAndConcat } from "@/util";

/* eslint-disable @next/next/no-img-element */
const NewsCard = ({ src, title, desc, time, width = false }) => {
  const container = `mr-5 inline-block xxlg:h-[480px] h-[380px] flex-col whitespace-normal bg-black  ${
    width ? "xxlg:w-[450px] w-[330px]" : ""
  }`;
  return (
    <div className={container}>
      <div class="h-[55%] w-full">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover object-center grayscale filter"
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
export default NewsCard;
