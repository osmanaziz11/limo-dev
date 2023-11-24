import Hero from "@/components/services/Hero";
import Section from "@/components/services/Section";
import React from "react";

const sections = [
  {
    number: "01",
    heading: "Gold Key Concierge",
    order: "right",
    color: "[#A72211]",
    filled: 1,
    textContent: [
      "Masterpiece Limousine offers a premium level of service with our Gold Key Concierge Service. We go above and beyond to provide a personalized and tailored experience that caters to the specific needs and preferences of our most discerning clients. Our commitment to excellence and attention to detail make us the preferred choice for luxury ground transportation.",
      "With our Gold Key Concierge Service, you can expect nothing but the best. Our experienced team of professionals works closely with you to create a customized itinerary that meets your specific needs and preferences. We provide expert advice and recommendations on event planning, entertainment options, restaurant reservations, and more. We strive to exceed your expectations and create an unforgettable travel experience.",
      "At Masterpiece Limousine, we understand that luxury travel should be seamless and stress-free. Our Gold Key Concierge Service is available 24/7 to provide around-the-clock assistance and support. We are dedicated to providing the highest level of service to ensure that your travel experience is smooth and hassle-free. Contact us today to learn more about our Gold Key Concierge Service, and let us help you create an unforgettable travel experience.",
    ],
    imgURL:
      "https://s3-alpha-sig.figma.com/img/b1ef/57b4/ba7ee2d34d55a349f2c52a88c7d27eb6?Expires=1701043200&Signature=lYVzVX0PewwUyMRPzd1KSQinFdI5najebgpKw2cgSI~QkPliEV5EMTpb92rhEld0bLNawdKDzY2OSSZm9R5hxVjANrWH5TV1hq8F5NWDp5bzltGnFDE-~W7lGunMWjDFYVAoH6cL0J-muF9BIyLXK5iccwOy2rXTviXNqqnP9Djt5IlRGrpc0gI4otjUJMYd4SfyFzjvnM7BAgPJnu2gZqcZZq3VFFp74j~xzlTb0oeBVSyRXpuXS9sKDbuxLpgGlHiPh3HCOa8P1kux6~nDMPxVN-0eH9gDVF7NvgYloW~FrEjWyIEQABEV08o9NC6xF~R06dagk~d9P~r6uZY-kw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    img: "/services/section/s1.png",
  },
  {
    number: "02",
    heading: "Airport Transfers",
    order: "left",
    color: "[#2189B7]",
    filled: 2,
    textContent: [
      "Masterpiece Limousine offers a diverse fleet of luxury vehicles to meet your transportation needs. From our high-end luxury buses to our Executive Sprinters and Sprinter Limos, we have everything you need to travel in style.",
      "Our services include affordable luxury vehicles such as sedans, SUVs, and the exclusive H2 Hummer that can accommodate up to 14 passengers.We also offer a range of convenient pickup options, including Curbside Pickup and Meet and Greet services to ensure you get to your destination hassle - free.",
      "If you're looking for airport transportation in San Diego, we have you covered. Choose from our luxury sedans and SUV’s or the H2 limo for a truly unforgettable experience. Our top priority is your safety and comfort, and we strive to provide a touch of elegance in all our services.",
      "Experience the ultimate in luxury transportation with Masterpiece Limousine.Contact us today for all your travel needs to and from San Diego International Airport.",
    ],
    imgURL:
      "https://s3-alpha-sig.figma.com/img/fc88/5afd/d08a49a1543d165d6219f4f316a79cf4?Expires=1701043200&Signature=Krze7QlqOLUYrVFNUeU1Wfmcqdmou9UgSrOOX0Ssq9d7LM66XJMCJP4hml73mYIHQbRztLRlJehyahG2bG8G11iVFmynrCCEM63t-vxFt-B9r8gqtkoZ-oQXtwSjNHCNF~iZ9iCcO4FtFHE-qH7SAb2baYC0Fciy286IwATqgeKiV6hNjFwhY0pBJgv8Sr4askxxpMIibEn9u9ANzULF0jtOfkrjTgCXs57C9Q24Riw7SJfP8QlWsO8RGXfBiC7vkF4c1QX-zPYCRxl5iVzl7MfvPr84vps8vVP1MkcuZPJd1dc0pM57R5~R6x3rliqAtL41L7NasRulO0xrmlp62g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    img: "/services/section/s2.png",
  },
  {
    number: "03",
    heading: "Executive Ground Transportation",
    order: "right",
    color: "[#A72211]",
    filled: 3,
    textContent: [
      "Masterpiece Limousine is the premier provider of Executive Ground Transportation in San Diego, California. Our commitment to excellence and attention to detail make us the preferred choice for corporate clients looking for reliable and comfortable transportation. Whether you need transportation to and from the airport or to a business meeting, we have the perfect vehicle to meet your needs.",
      "Our fleet includes a range of luxurious vehicles, including sedans, SUVs, Luxury Buses, Executive Sprinters, and Sprinter Limos. All our vehicles are meticulously maintained and outfitted with the latest amenities to ensure your comfort and safety. Our experienced drivers are knowledgeable about the area and will get you to your destination on time and in style. We offer competitive pricing and customizable packages to meet your specific needs and budget. Choose Masterpiece Limousine for all your Executive Ground Transportation needs in San Diego.",
      "At Masterpiece Limousine, we understand that executive travel is not just about getting from point A to point B. It's about arriving in style, comfort, and on time. That's why we offer a range of services designed to meet the needs of our corporate clients. From Meet and Greet services to Curbside Pickup, we make sure that your travel experience is smooth and hassle-free. We also offer 24/7 customer support, so you can always reach us if you have any questions or concerns. Trust us to provide the best Executive Ground Transportation services in San Diego.",
    ],
    imgURL:
      "https://s3-alpha-sig.figma.com/img/a917/fad2/be540f97f1d48b9dd83deee656dc7eb8?Expires=1701043200&Signature=dQdeg7DlyZxLwJkAb7dyhNGZ4ckx5Z9h--xNPAiBpWejCT~MnkOWeud-42NozjwdU2fmor5CDfpT5lSmUkvbebH5KqLg~gs8jxqEUWNdzsOh5aORjo-wMvmtmiTdFSbmoV0ou-L9QXtER7BGJFh5mh9r8wQZwbc5qy-kXKSxHck2yJbE0v6sgosvfA7wwhRpBRcYvjcdgwMweTYXx563FhsZlJE5gYlZDwk6MAHJSAO1cf4gQdWoy0ZItl1nrVldeRXXk32rMl0ZMTtl87NxMTHsduj3Kw-LGT7G7keG7z3bKv~h-Lawn9nGIahzNgArWHEIGt61~WVt6~vGk8DrJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    img: "/services/section/s3.png",
  },
  {
    number: "04",
    heading: "Tijuana/CBX Airport Services",
    order: "left",
    color: "[#2189B7]",
    filled: 4,
    textContent: [
      " At Masterpiece Limousine, we take great pride in delivering safe, reliable, and affordable luxury ground transportation. Our extensive range of services includes transportation to the CBX (Cross Border Xpress) and Tijuana Airport in Mexico, with a diverse fleet of luxury vehicles, including Executive and Limo Sprinters, that are designed to cater to all your transportation needs.",
      " Our experienced drivers are well - versed in Mexican laws and the region, ensuring that you have a seamless and hassle - free border crossing experience.Our Meet and Greet and Curbside Service options are designed to provide you with an effortless travel experience from the moment you step out of your door.To expedite the process and minimize wait times, we also offer a Border Crossing Fast Pass service at an additional cost.",
      "At Masterpiece Limousine, we place the utmost priority on safety and reliability.Our vehicles are maintained meticulously and equipped with the latest safety features to guarantee your comfort and peace of mind.We believe that luxury ground transportation should be affordable and customizable to meet your unique needs and budget.",
      "Whether you are traveling for business or pleasure, our transportation services with Meet and Greet and Curbside Service options will get you to your destination in comfort and style.Experience the epitome of luxury ground transportation with Masterpiece Limousine today.Get in touch with us to schedule your next trip.",
    ],
    imgURL:
      "https://s3-alpha-sig.figma.com/img/eee9/e2d6/ae476b0f7ecefb8406fcfa092ff84dc5?Expires=1701043200&Signature=Z14ktCbFXFqQYoEKNmKON2L5rKPeIXorXNouMCz5~K3y578u5SeXkYhRrrJyvZpG5Ndp3ygzilt7jsJlNAiQLtzw4kORUmAN9bELuGJX1HtQku74aR8tNiWSxAVAukbNlKeua6SDDo-7Sa4E7UpMmNWVI1Iry-642R9RIy6B5y7DcvKBhmRbDUiaMJMtfB581LKuzy4l~jAFM~BPzk-2YSGpKUDO-Lx~fCj25M0Lw9mUa7~KOuYr1cRQbMpzFqzdyHFE~ImOuh8PU0cehDa2lVpK7rbXBQNb2fRA~X-Sw7yHzHOb57FjfRmo6f8~v~ZI5Pbrg~D3h2EsfiyFuW1Y6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    img: "/services/section/s4.png",
  },
  {
    number: "17",
    heading: "Gold Key Concierge",
    order: "right",
    color: "[#A72211]",
    filled: 5,
    textContent: [
      " Are you looking to make your child's school event unforgettable? Look no further than Masterpiece Limousine's safe and reliable school event limo services. Our experienced and professional chauffeurs will pick your child up from home and take them to their school event in style, ensuring a safe and enjoyable journey. Our luxury limousines are equipped with all the amenities to make the ride even more enjoyable, with options like stretch limousines, Hummer limos, and party buses. And with the option to bring friends along in our spacious H2 Hummer Limo, which can hold up to 40 passengers, the party can start right in the car. At Masterpiece Limousine, we understand the importance of privacy and security for children, which is why our limousines have tinted windows and separate driver's compartments. Our chauffeurs are also trained in handling paparazzi and security threats on the road and are always available to assist through the intercom system.",
      " Safety is our top priority, so you can trust that your child will be in good hands with us.We follow all local regulations and have a strict zero - tolerance policy for alcohol or drug use in our vehicles.Our chauffeurs are also trained in defensive driving techniques to ensure your child's safety on the road.",
      "If you need to make last - minute adjustments to your schedule, our school event limo services in San Diego are flexible and can start at any time.And if the event ends earlier than expected, our limos are on standby to take your child home safely.",
      "And if you're looking for transportation for prom night, Masterpiece Limousine has got you covered with our luxury prom limousine service. We offer a wide range of luxury vehicles, including Executive Sprinters and Sprinter Limos, equipped with top-of-the-line amenities to make your prom night special. Our experienced and professional chauffeurs will ensure your prom night is safe, fun, and stress-free.",
      "Contact Masterpiece Limousine today to book our school event or prom limo services and give your child the celebrity treatment they deserve.",
    ],
    imgURL:
      "https://s3-alpha-sig.figma.com/img/52dd/a4b8/c3718d7ddb4bdb04027f7d11c576dc8b?Expires=1701043200&Signature=fVaaTwtMzpakU3x46jKe5l2Z9KFVM20pgCqP236KzbI9APtr~hEsXXW9rt3wk3N0bj4rc4OsqHLEdV6PO-GdUVPGtjcku0tot0qy6l2ZuqTUFwdzTBIQgqkpULFs89WtFpU4XoWWmRs8g3j0cgMjOTmdz9lS1raSeLn9EGd84n2oRW7cpZ6InZQX9LXwlD~ursJjIaorq2Ej6W2ryJfdkSYmS~enu3CWVigwiaxMcQhRqQHaCbwmzAOSMxgHRWnx9WHi8ZBVxXACq1NxC8nRJfTeMb79T72yrdKATOOpJA7Mgf8r~AlDZAv0ocwr-1lRVgMPyZaLFFO-qvYOBaNgwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    img: "/services/section/s17.png",
  },
];

function Services() {
  return (
    <>
      <Hero />
      {sections.map((section, index) => (
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
