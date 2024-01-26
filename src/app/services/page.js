import Hero from "@/components/services/Hero";
import Section from "@/components/services/Section";
import React from "react";
import { ServicesSectionsData } from "@/util/para";

function Services() {
  return (
    <>
      <Hero />
      {ServicesSectionsData.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </>
  );
}

export default Services;
