import React from "react";

function Polygon({ isActive = false, top }) {
  return (
    <div
      className={`relative h-[10px] xs:h-[11.5px]  sm:h-[14px] md:hidden smMd:h-[18px] lg:block 2lg:h-[22px] xxlg:h-[24px] 3xxlg:h-[34px]`}
      style={{ top: `-${top}px` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 22 36"
        fill={isActive ? "#2189B7" : "none"}
      >
        <path
          d="M1.98951 33.4035L2.2165 15.7134L20.0104 2.06961L19.7835 19.7597L1.98951 33.4035Z"
          stroke="#2189B7"
          stroke-width="2"
        />
      </svg>
    </div>
  );
}

function Polygons({ active, classes }) {
  const polygons = new Array(20).fill(null);
  return (
    <div className={classes}>
      {polygons.map((_, idx) => {
        return (
          <Polygon
            key={idx}
            top={idx === 0 ? 0 : idx * 3}
            isActive={idx <= active ? true : false}
          />
        );
      })}
    </div>
  );
}

export default Polygons;
