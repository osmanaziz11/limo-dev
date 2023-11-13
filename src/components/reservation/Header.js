import { montserrat400 } from "@/util/fonts";

const { RightArrow } = require("@/assets/icons");

function Header({ title, activeTab, onClick }) {
  return (
    <div className="flex justify-between bg-[#2189B7] p-3 px-5">
      <div className="flex items-center">
        <h1
          className={`flex items-center justify-between text-center  text-xs tracking-[5px]   text-white  sm:text-base md:tracking-[10px] ${montserrat400} uppercase `}
        >
          <div class="h-[13px] w-[18px] rounded-full border-2 bg-transparent xxs:mr-6 xxs:h-[15px] xxs:w-[15px] sm:mr-6 sm:h-[20px] sm:w-[20px]"></div>
          {title}
        </h1>
      </div>
      <div
        className="mb-2  rotate-90 cursor-pointer"
        onClick={onClick}
      >
        <RightArrow width={15} height={15} />
      </div>
    </div>
  );
}

export default Header;
