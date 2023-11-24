import React from "react";

const Text = ({ text }) => {
  return (
    <p className="font-Montserrat 425:text-[12px] 768:text-[13px] text-center text-[10px] font-[700] uppercase leading-normal tracking-wider text-white 2xl:text-[16px]">
      {text}
    </p>
  );
};

export default Text;
