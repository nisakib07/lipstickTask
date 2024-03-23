import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  const bannerItems = [
    {
      punchline: "Experience Luxury in Every Swipe!",
      image: "https://i.ibb.co/qDnD17k/mac-sku-NY9-N37-1x1-0.jpg",
    },
    {
      punchline: "Unleash Your Boldness with Vibrant Colors!",
      image: "https://i.ibb.co/zPN64dz/colors.webp",
    },
    {
      punchline: "Turn Heads with Stunning Shades!",
      image: "https://i.ibb.co/3kjt8PG/shades.webp",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <h1 className="mt-10 text-5xl text-center font-extrabold">
          M·A·CXIMAL SILKY MATTE LIPSTICK
        </h1>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2000 }}
        className="mySwiper">
        {bannerItems?.map((banner) => (
          <SwiperSlide>
            <div className="min-h-[500px] flex flex-col-reverse lg:flex-row items-center justify-around">
              <div className=" text-center">
                <h1 className="text-4xl font-extrabold">{banner?.punchline}</h1>
              </div>
              <div>
                <img className="w-96" src={banner?.image} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
