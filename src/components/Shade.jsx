import React from "react";

const Shade = () => {
  const productDetails = [
    {
      image:
        "https://raw.githubusercontent.com/nisakib07/lipstickTask/main/src/assets/girl1.avif",
      title: "Matte Finish Lipstick",
      description:
        "Achieve a stunning matte finish that lasts all day with our range of lipstick shades. Formulated with hydrating ingredients to keep your lips feeling smooth and comfortable.",
    },
    {
      image:
        "https://raw.githubusercontent.com/nisakib07/lipstickTask/main/src/assets/girl2.avif",
      title: "Long-Lasting Lipstick",
      description:
        "Experience long-lasting color and shine with our ultra-pigmented lipstick formula. Available in a variety of vibrant shades to suit any occasion.",
    },
    {
      image:
        "https://raw.githubusercontent.com/nisakib07/lipstickTask/main/src/assets/girl3.avif",
      title: "Moisturizing Lipstick",
      description:
        "Indulge your lips with our moisturizing lipstick enriched with nourishing oils and butters. Say goodbye to dry, chapped lips and hello to smooth, hydrated color.",
    },
  ];

  return (
    <div>
      {productDetails?.map((product) => (
        <div>
          <img src={product?.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Shade;
