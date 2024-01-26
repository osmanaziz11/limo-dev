import { montserrat400 } from "@/util/fonts";
import Image from "next/legacy/image";

function ServiceCard({ topText, src, bottomText, blurSrc }) {
  return (
    <div className="relative mb-24 flex w-[239px] flex-col whitespace-normal sm:mb-1 sm:me-2 sm:inline-flex  sm:w-[33%] smMd:w-60 xxlg:w-[378px]" data-aos="fade-up">
      <div class="absolute bottom-0 z-[2] h-[30%] w-full bg-gradient-to-t from-black to-transparent shadow-2xl"></div>
      <div class="absolute top-[16%]   z-[1] h-[30%] w-full bg-gradient-to-b from-blue-400 via-transparent to-transparent xxlg:top-[13%]"></div>
      <p
        className={`flex h-[72px] justify-center p-3 text-center text-xs uppercase text-[#d0d0d0] xxlg:h-[85px] xxlg:text-base ${montserrat400} tracking-[10px]`}
      >
        {topText}
      </p>
      <div class="relative h-[359px] xxlg:h-[575px]">
        <Image
          src={src}
          alt={topText}
          blurDataURL={blurSrc}
          loading="eager"
          priority={true}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p
        className={`absolute -bottom-8 z-[3] px-4 text-center text-xs text-[#d0d0d0] xxlg:text-base ${montserrat400}`}
      >
        {bottomText}
      </p>
    </div>
  );
}
export default ServiceCard;
