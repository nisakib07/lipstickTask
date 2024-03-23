import React from "react";
import img1 from "../assets/s.jpeg";
import img2 from "../assets/shade1.jpeg";
import img3 from "../assets/shade2.jpeg";
import img4 from "../assets/shade4.jpeg";
import img5 from "../assets/shade5.jpeg";
import img6 from "../assets/shade6.jpeg";

const Shade = () => {
  const productDetails = [
    {
      image: `${img1}`,
      title: "WHIRL",
      description: "Assertive. Adaptable. Irresistible",
    },
    {
      image: `${img2}`,

      title: "WARM TEDDY",
      description: "Cushy. Plush. Quietly Luxurious",
    },
    {
      image: `${img3}`,

      title: "DIVA",
      description: "Spoiled. Over-The-Top, Nonstop",
    },
    {
      image: `${img4}`,

      title: "RUBY WOO",
      description: "Iconic. Bold. World-Famous",
    },
    {
      image: `${img5}`,

      title: "SWEET DEAL",
      description: "Agreeable. Friendly. Prized.",
    },
    {
      image: `${img6}`,

      title: "HONEYLOVE",
      description: "Endearing. Idyllic. Saccharine",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="mt-10 text-5xl text-center font-extrabold">
        FIND YOUR SIGNATURE SHADE
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {productDetails?.map((product) => (
          <div className="bg-gray-700 p-3 rounded-lg text-white">
            <img src={product?.image} className="w-full h-[340px]" alt="" />
            <h1 className="mt-2  text-xl font-extrabold">{product?.title}</h1>
            <p className="text-lg font-medium">{product?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shade;
