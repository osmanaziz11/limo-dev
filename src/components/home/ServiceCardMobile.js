import * as icons from "@/assets/icons";
import { montserrat500 } from "@/util/fonts";

export default function ServiceCardMobile({ title, icon, para }) {
  const Icon = icons[icon];
  return (
    <div class="mx-2 my-2 flex h-[240px] flex-col items-center justify-between bg-[#383B4280] px-5 py-5 text-white">
      <p
        className={`text-base xxs:text-xs xs:text-sm  ${montserrat500} uppercase`}
      >
        {title}
      </p>
      <div className="h-[60px] w-[60px] xxs:h-[50px] xxs:w-[50px]">
        <Icon />
      </div>
      <p
        className={`text-center text-[12px] xxs:text-[10px] xs:text-xs ${montserrat500}`}
      >
        {para}
      </p>
    </div>
  );
}
