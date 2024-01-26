import * as icons from "@/assets/icons";
import { montserrat500 } from "@/util/fonts";

export default function ServiceCardWeb({ title, icon, para }) {
  const Icon = icons[icon];
  return (
    <div class="my-2 flex flex-col items-center justify-between bg-[#383B4233] px-5 py-5 text-white md:h-[140px] md:w-[120px] slg:h-[200px] slg:w-[180px] xl:h-[230px] xl:w-[200px] xxlg:h-[270px] xxlg:w-[260px]" data-aos="zoom-in">
      <p
        className={`text-[10px] xl:text-[14px] xxlg:text-lg ${montserrat500} uppercase`}
      >
        {title}
      </p>
      <div className="h-[40px] w-[40px] xl:h-[60px] xl:w-[60px]">
        <Icon />
      </div>
      <p
        className={`text-center text-[8px] xl:text-[10px] xxlg:text-[13px] ${montserrat500}`}
      >
        {para}
      </p>
    </div>
  );
}
