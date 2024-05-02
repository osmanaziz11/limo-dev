import ListItem from "./ListItem";
import { NavigateListItems } from "@/util/para";

const NavigateList = () => {
  return (
    <div className="px-10 text-center 1440:text-center">
      <p className="font-Montserrat text-[19px] font-[700] uppercase tracking-[3.6px] text-[#FFFFFF]">
        NAVIGATE
      </p>
      <div className="flex justify-center  1440:justify-center">
        <ul className="mt-5 flex list-inside list-disc flex-col space-y-1 text-left">
          {NavigateListItems.map((item, index) => (
            <ListItem key={index} text={item.name} route={item.href} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavigateList;
