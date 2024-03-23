import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Rating from "react-rating";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma",
      image: "https://i.ibb.co/0GQBJKY/girl1.jpg",
      rating: 5,
      review:
        "Absolutely love this lipstick! The shade is perfect for everyday wear and it stays on all day without needing to reapply. Highly recommend!",
    },
    {
      name: "Sophia",
      image: "https://i.ibb.co/QX7JQPS/girl2.jpg",
      rating: 4,
      review:
        "I've been using this lipstick for a few weeks now and I'm impressed with how long it lasts. The color is vibrant and it doesn't dry out my lips like other lipsticks do.",
    },
    {
      name: "Olivia",
      image: "https://i.ibb.co/VxD2Ktr/girl3.jpg",
      rating: 5,
      review:
        "This lipstick exceeded my expectations! The shade is stunning and it feels so comfortable on my lips. Will definitely be purchasing more shades!",
    },
    {
      name: "Ava",
      image: "https://i.ibb.co/h94vQqD/girl4.jpg",
      rating: 3,
      review:
        "The lipstick color is beautiful but it doesn't last as long as I expected. I find myself needing to reapply throughout the day.",
    },
  ];

  return (
    <div className="max-w-screen-xl lg:mx-auto bg-gray-300 py-4 mt-16 rounded-lg mx-4">
      <h1 className="mt-16 text-5xl text-center font-extrabold">
        TESTIMONIALS FOR YOU
      </h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper mt-10">
        {testimonials?.map((testimonial) => (
          <SwiperSlide>
            <div className="flex justify-center flex-col items-center gap-5">
              <img
                className="rounded-full w-24 h-24"
                src={testimonial?.image}
                alt=""
              />
              <div>
                <h1 className="text-xl font-bold">{testimonial?.name}</h1>
              </div>
              <Rating
                className="text-sm"
                initialRating={testimonial?.rating}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                readonly
              />
              <div>
                <p className="text-xl max-w-screen-md text-center font-bold">
                  {testimonial?.review}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
