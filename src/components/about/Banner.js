import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/2a63/b472/51f13a6b3fdbc15029f11d5054b12c77?Expires=1701043200&Signature=ENwYbY0~mtlfOrzQf7zH0wYZIv5eDRtKGSJzz2Osym9XoXfHXAlD7xJ4~osX3PHWiuBQfIQEt-noEx39mY5BqeJPqp0876-3wyZH8AfLZxwAARq66d7us4m-6iztAbdKDHE6ZdUzAkz~yao2isNQuKq6VqaLnS1rHrczyS7pjwvYeAN5GDltIOFZP6S8Re3u-szUqXj5MoB6hCT2xrnRffGBKilI5si8kB94HRwo5DPvIXYij7NZ7hQfh0~9EkXhDy6ZSTa0zUTYCR605pl75eAKFn867E~Wgcy4Ad7pj-QhGZalNyyAdSKRxhdaaGC41wL2tTCqIsGh4laCG~7Lbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          className="h-auto w-full max-w-full"
        />
        <div className="absolute left-[32%] top-[24%]">
          <div className="backdrop-blur-2 375:w-[128px] 375:h-[158px] 425:w-[148px]  425:h-[180px] 1024:w-[262px] 1024:h-[238px] flex h-[137px] w-[110px] flex-col items-center justify-center bg-black bg-opacity-50 backdrop-filter md:h-[328px] md:w-[272px] lg:h-[540px] lg:w-[450px] 2xl:h-[1090px] 2xl:w-[900px]">
            <p className="text-shadow font-LeagueSpartan 1024:text-[60px] text-[15px] font-[700] text-white md:text-[35px] lg:text-[80px] 2xl:text-[120px]">
              WHY US?
            </p>
            <div className="text-shadow font-Archivo 375:pb-8 375:pt-4 425:px-5 1024:pb-20 1024:px-14 px-3 py-4 text-center text-white 2xl:px-16 2xl:pb-64">
              <p className="1024:text-[15px] text-[5px] font-[300] leading-tight md:text-[12px] lg:text-[20px] 2xl:text-[30px]">
                At Masterpiece Limousine, we understand that when it comes to
                transportation, our clients expect nothing but the best. Thats
                why were dedicated to providing the highest quality services
                that prioritize great customer service, reliability, and safety.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 39 22"
              fill="none"
              className="1024:w-[25px] 1024:h-[15px] h-[6px] w-[16px] md:h-[10px] md:w-[20px] lg:h-[20px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[40px]"
            >
              <line
                x1="0.707107"
                y1="1.29298"
                x2="19.799"
                y2="20.3849"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="18.3847"
                y1="20.3848"
                x2="37.4766"
                y2="1.2929"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
