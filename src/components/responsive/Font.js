"use client";

import React, { useEffect } from "react";

function Font({ children, size, classes }) {
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleDimensions);
    return () => {
      window.removeEventListener("resize", handleDimensions);
    };
  }, []);

  return (
    <h1
      className={`${classes}`}
      style={{ fontSize: `${parseInt((width / 718) * size)}px` }}
    >
      {children}
    </h1>
  );
}

export default Font;
