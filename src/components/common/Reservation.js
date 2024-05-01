import React from "react";
import * as fonts from "@/util/fonts";

const Reservation = () => {
  const handleReservationClick = () => {
    window.location.href = "https://book.mylimobiz.com/v4/masterpiecelimo";
  };

  return (
    <div>
      <button
        className={`hidden bg-crimson px-4 py-[15px] text-xs uppercase  text-white lg:block xxlg:px-8 xxlg:py-[20px] xxlg:text-base ${fonts.montserrat600}`}
        onClick={handleReservationClick}
      >
        Reservations
      </button>
    </div>
  );
};

export default Reservation;
