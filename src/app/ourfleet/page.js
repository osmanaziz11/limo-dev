import Hero from "@/components/ourfleet/Hero";
import Section from "@/components/ourfleet/Section";
import React from "react";

function OurFleet() {
  const sections = [
    {
      order: "left", // Image on left, text on right
      textContent: [
        " When it comes to luxury ground transportation, the Mercedes-Benz Sprinter Limo is a top choice for any occasion. Whether you're planning a corporate event or a wedding, this sleek and stylish vehicle is sure to impress. Not only is the interior spacious and comfortable, but the onboard TVs and bar area make it perfect for presentations or celebrations.",
        "At Masterpiece Limousine, we prioritize safety, reliability, and comfort, which is why we offer the Mercedes Sprinter Limo for our clients. Our professionally trained chauffeurs ensure a smooth and enjoyable ride, and we are fully licensed and insured for your peace of mind.",
        "In addition to corporate events and weddings, the Mercedes Sprinter Limo is also a popular choice for proms, bachelor/bachelorette parties, and other special occasions. With light shows and customizable music options, this luxury vehicle adds a touch of glamour to any event.",
        "Trust Masterpiece Limousine to provide you with the highest quality luxury ground transportation services. Contact us today to book the Mercedes Sprinter Limo for your next event and experience the ultimate in style and comfort.",
      ],
      title: "Party Bus",
      imgURL: "https://s3-alpha-sig.figma.com/img/0baf/ec15/c78d0baf41d1fd2e2eec376fbf1e9ab8?Expires=1701043200&Signature=Q1NCmZUKN0ZoHRlayCyOVXyvESV1VbY6CDEgj3pZk5hKDzYq0pJ8mikPIqSkEHMfo7-PmFwbsAKPRzpEkFmo7350xhfsroI55xH7E0uXjGN3f~~NCX-0I-kLwVesB84f23EhNCs4eZ5KdPy8jJQVH-pBaAyA2kYzsVUky3quSTDQ-8iJS5VJqJMiBdfj8gBtu5eRe4gW11NObcplzzhF-S7qWKbJPUHpwEUUed20HQz2vT4kcOh35exAZdtCSuLeH4K2B451WPtdpUBanx7SVe3cZHMWN9-qQdKkwc9IGyd1Lm~VQHmSroWjk2-NVMaSYm6TWGW0Car9YW-Q~VIVJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      order: "right", // Image on right, text on left
      textContent: [
        "Looking for luxury ground transportation that's reliable, comfortable, and safe? Look no further than the Mercedes-Benz Executive Sprinter. This vehicle is perfect for corporate team-building excursions, with its spacious interior and open-style limo seating, providing a luxury environment for up to 12 passengers.",
        "Not only is the Sprinter impressive in appearance, but it's also equipped with advanced safety features such as collision prevention, lane keeping, and crosswind assist. The Sprinter's V6 CDI diesel engine offers powerful performance and fuel efficiency, making it a reliable choice for any long-distance travel.",
        "Aside from its impressive performance and safety features, the Sprinter is also known for its quality and reliability. Its spacious XL extended cab model provides plenty of room for luggage, making it a convenient choice for transporting wedding parties or other large groups. Additionally, guests can enjoy their preferred music with an AUX cord on board, adding to the celebratory atmosphere.",
        "Choose the Mercedes-Benz Sprinter for a luxury and reliable transportation experience that exceeds your expectations. Contact us today to book your Mercedes-Benz Executive Sprinter and experience the comfort and sophistication of luxury ground transportation.",
      ],
      title: "Party Bus",
      imgURL: "https://s3-alpha-sig.figma.com/img/a5f5/715b/112c32c0ee8227c9279ad4f0ef376b17?Expires=1701043200&Signature=gkZt3PIAYQUbiF461S3KNOUdeuDBt~j1VwTFqKbrN6oiiCK3T-BwH3RvzVJkYNKtsTiutOPui493ZgO~8QS4727XneWyzUIRkOLlDKA50Thv2B0SiAEqEPrDyeFcK6MKTf-c44kYfNpV3vrvEQcwBBp5~gedalQjFRSFe~lk-qv5FysCYfA-dBV42PecD38T8cscI6lSXGDCuHvDO33BZllmBsRwY4FL7fayxJv8yfW6FIrDBnk4~0LHqTMPMlHv0ee~JSX~kkmD5mJZJb84YhYRS-FaEKBtKwJAidDywoaRRmDP3PenaICasY~xHepgeYojAZLDdppEbK5tm5mEtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      order: "left", // Image on left, text on right
      textContent: [
        "Masterpiece Limousine is proud to offer our clients luxury transportation services that combine comfort, safety, and reliability. Whether you're traveling for business or pleasure, our professional chauffeurs are dedicated to ensuring your experience is stress-free and enjoyable. Our luxurious stretch limo rental is one of our most popular services, offering passengers an unforgettable travel experience.",
        "Our Stretch limos are spacious, comfortable, and can accommodate up to 8 passengers, with plenty of luggage space. This makes it perfect for airport transportation, business meetings, or a night out on the town. The Stretch limo rental is the perfect choice for those who seek both style and convenience.",
        "At Masterpiece Limousine, we pride ourselves on our experienced and professional chauffeurs who are knowledgeable about the San Diego area and can provide a stress-free journey to your destination. We follow all local regulations and have a strict policy of zero-tolerance for alcohol or drug use in our vehicles. Safety is our top priority, and we are fully licensed and insured for your peace of mind.",
        "In addition to our Stretch limo rental, we offer a range of other luxury vehicles, including H2 Hummer limos, Cadillac Escalade limos, and more. We ensure that we have the perfect vehicle to suit your style and budget.",
        "At Masterpiece Limousine, we aim to provide you with a travel experience that is nothing short of exceptional. Our luxurious Stretch limo rental and other luxury transportation options are the perfect choice for those who seek both comfort and elegance. Contact us today to learn more about our services and book your next luxurious travel experience with us.",
      ],
      title: "STRETCH LIMOUSINE",
      imgURL: "https://s3-alpha-sig.figma.com/img/c298/2351/440d3a776cc66068ce24b0baccdab7ec?Expires=1701043200&Signature=qb9NIsTJx5AtG3TSxFAyIXjDUFchTeT0FenCR~h64LpXJymflH1zctF3w2SQ-tJQ9mFEV0NYFsB4gZKHFCHWutxaAkpBQ~JjabdseKEKsvU5wKknv3oAHVFG3q5lOFi6rftK1jpPMc-ksTzmj~mlUZWyoAqQIhbfr20h~ChMxkrXcNeNiNqWHlv9HQg4FPde6HvD5-pCqlZlIcfykhYvJ8HeVLfn8lcOz~Diy~aNK~Q-baQUstbcc7oAvc6DP0ZI0NVdw3STzYT4-arCBQZtJ4HkhcMQnyCMorg57j8RN1qtp2IuRH9nKne2d8hGscXhQ7BmthscYvzmbCFkDtJHXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      order: "right", // Image on right, text on left
      textContent: [
        "At Masterpiece Limousine, we understand the importance of making a statement and standing out from the crowd. That's why we offer the most exclusive and luxurious limousine services in San Diego, including our H2 Hummer Limo.",
        "Our H2 Hummer Limo is the epitome of exclusivity, attracting more attention than any other car on the street. Custom-designed with amenities like neon lights, televisions, and a wet bar, this limo is perfect for bachelor/bachelorette parties, weddings, proms, nights on the town, and sporting events. With Bluetooth connectivity, you can easily stream your favorite music and make hands-free calls while you ride in style.",
        "Step into the Masterpiece Hummer Limo, and suddenly you're turning heads and the center of attention. You'll feel like a VIP, making a grand entrance to your event in the most stylish and unforgettable way possible. Our H2 Hummer Limo is perfect for those who want to do things in their unique style and accentuate their star quality.",
        "At Masterpiece Limousine, we pride ourselves on providing our clients with the highest service and luxury. When you choose our H2 Hummer Limo, you can trust that you will receive the best in style, comfort, and convenience. Our professional and experienced chauffeurs are dedicated to ensuring that your ride is safe, comfortable, and stress-free.",
        "Book our H2 Hummer Limo today and experience the exclusivity and luxury that only Masterpiece Limousine can offer. Make a statement and stand out from the crowd with the most exclusive limousine service in San Diego.",
      ],
      title: "STRETCH LIMOUSINE",
      imgURL: "https://s3-alpha-sig.figma.com/img/9939/d74a/85d8fac2dfbabdbc3ca8fdaf4ebc70d4?Expires=1701043200&Signature=XAJ7122Y83N0nfUyif5gh6a96Gwk3K3MoUpIF5-4EiVm~lKcgZTFjT0oulFMrkUsviIEYVtyaydTqoWvVDiMLGMOASh-u4bxA-9cRZSKPZXOE1Iy~fDz3NcMFkyFoq5Zc~B-511vTtXECUclkReHU9EZY2zwGDkuXAKw1Cc9wGLCyAOjTMckOTF3hCu4NzOflt06mAX3FLMY9clQS~d1eOYcp~mgGd~1C~HeNgkWW-RZuyqNuOxLGYq3aycjRd9l-NvNcs1tg1Pk0xB7CGjHSwkabffXhLnq2KPrOJ1X-xuHVr3h1EWiKUH~6pZCHdY~TC1ltRMvgpf6BhypCRsQLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      order: "left", // Image on left, text on right
      textContent: [
        "Luxury ground transportation is the perfect way to elevate your travel experience, and Masterpiece Limousine offers a range of options to suit your needs. Our Executive Sedans are a great choice for small groups, with seating for 2-3 passengers and room for luggage. They are ideal for business meetings, airport transportation, and special events.",
        "With luxurious features like leather seats, climate control, and ample legroom, our Executive Sedans offer both style and comfort. Our fleet includes top-of-the-line brands like Mercedes, Cadillac, and Lincoln, ensuring a smooth and sophisticated ride.",
        "At Masterpiece Limousine, we prioritize safety, reliability, and comfort, and our professional chauffeurs are trained to provide the best service. With our Executive Sedans, you can sit back and relax, knowing that you're in good hands.",
        "If you're interested in booking an Executive Sedan for your transportation needs, don't hesitate to contact us. We'll work with you to find the perfect vehicle for your occasion, and our team will ensure a smooth and enjoyable ride every time.",
      ],
      title: "SEDAN",
      imgURL: "https://s3-alpha-sig.figma.com/img/6c95/8fa5/eaaf59570b1d05479ad3b23e17f5c177?Expires=1701043200&Signature=n8X7tcEyws0G9bHkMOIutWyAGq1K4BQEQFlRZ-iDiQmF3w860iGg2RNT~hp8jGgmROCObbcqyf~5jILSLgexelfoQ3kKOUIXxHlt0ih0XmMb56w1E0B-KbYLxAvPjS03EzontUQuTqtHQUxAqLEtS3Tklr0DaqgMlz~XnNseq9wOnfnjcI-52MHKG4GkGwkIbbfpEOwtIyxOcH5NUqZzxRIKxvkrLgAR~jihuFu~0QMGDrxerBHYE4sMEt4evsfnXrHsnmXBUnLIPb5cHwEm13s0jTmQ6YKdb0Grsjg76bfAZztK61adAd8vQy~DpSWp~aSQawK4YWucxMzl~zuiwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      order: "right", // Image on right, text on left
      textContent: [
        "Indulge in the luxury of our new Executive SUVs, designed for the discerning traveler seeking a top-notch transportation experience. Our SUVs are the epitome of sophistication, offering unparalleled comfort and convenience.",
        "From the moment you step into one of our Executive SUVs, you will be struck by their sleek and modern design. The plush leather seating and advanced audio systems provide the ultimate in luxury and entertainment. With three rows of seating, these vehicles can accommodate up to 6 passengers comfortably, making them the perfect choice for exclusive corporate events or private gatherings.",
        "But our Executive SUVs are not just visually stunning; they are also environmentally friendly. As Flex Fuel vehicles, they can run on 85% Ethanol, making them an excellent choice for those looking to reduce their carbon footprint.",
        "At Masterpiece Limousine, we pride ourselves on our dedication to safety, reliability, and comfort. Our elite drivers are highly trained and knowledgeable about the Southern California region, ensuring that your ride will be both enjoyable and efficient. With our Executive SUVs, you can sit back and relax, knowing that you are in the hands of professionals who prioritize your comfort and safety.",
        "Whether you are a celebrity, executive, or discerning traveler looking for an exclusive transportation experience, our Executive SUVs are the perfect choice. Contact us today to book your ride and indulge in the luxury and sophistication of our new fleet.",
      ],
      title: "SUV",
      imgURL: "https://s3-alpha-sig.figma.com/img/f3a3/c5e7/211126698f62f6b44b31f29242c9079a?Expires=1701043200&Signature=Fh~a6Kv5HownOIz7gCWLdjsLdZnRxbQX1BQ3ZWpkWc5FWMjyz9gsNreJwWh6JZBYd~pgkODp3hiI8jbghVMLQShnmQNahrPFQ2gg7q42QpzwP~EcJGjqxJVVMQWwFdt8IptVvdUHjl7N83YGKxB6LVbfk0VNIoIyYh-pBmKcuDjcVKwY4GYU92f0tsOh3Zo1tx6dTryTIGcsdCdRWXjSSbqzwX9gt7WoLZEsEDJM7YNHjjPN6uJNC3Ro9GhflAhoSMRAv9U5kMSIbt3zrJviA6sAI5E-myrRbX1aGY5BApikRSkwGbXUzAB5uL80sG5LGbq7fT0JeYVNUmis1v45rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {sections.map((section, index) => (
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
