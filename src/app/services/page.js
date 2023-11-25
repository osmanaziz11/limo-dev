import Hero from "@/components/services/Hero";
import Section from "@/components/services/Section";
import React from "react";
import { ServicesSectionsData } from "@/util/para";

function Services() {
  return (
    <>
      <Hero />
      {ServicesSectionsData.map((section, index) => (
        <Section
          key={index}
          order={section.order}
          textContent={section.textContent}
          title={section.heading}
          imgURL={section.imgURL}
          color={section.color}
          number={section.number}
          img={section.img}
        />
      ))}
    </>
  );
}

export default Services;
