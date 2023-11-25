import Hero from "@/components/ourfleet/Hero";
import Section from "@/components/ourfleet/Section";
import React from "react";

function OurFleet() {

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {OurFleetSections.map((section, index) => (
        <Section
          key={index}
          order={section.order}
          textContent={section.textContent}
          title={section.title}
          imgURL={section.imgURL}
        />
      ))}
    </>
  );
}

export default OurFleet;
