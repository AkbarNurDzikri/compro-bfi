import React from "react";
import Image from "next/image";
import ProductCarousel from "./productCarousel";

const OurProducts = () => {
  return (
    <div className="w-full bg-gradient-to-b from-fifth from-37% via-sixth via-20% to-primary/0 to-80% pt-10">
      <h1 className=" text-secondary font-bold text-center text-3xl md:text-4xl lg:text-5xl">
        OUR PRODUCTS
      </h1>

      <ProductCarousel />

      <div className="sm:text-zinc-950 py-20">
        <h5 className="text-center tracking-wide font-semibold text-lg md:text-xl lg:text-2xl">
          WORK OF EXCELLENCE
        </h5>

        <h1 className="font-bold text-center text-xl md:text-3xl lg:text-5xl">
          OUR COMMITMENT CERTIFICATES
        </h1>

        <div className="flex flex-wrap justify-center items-center mt-10">
          <Image
            src="icons/home/logo-halal.svg"
            width={100}
            height={100}
            alt="logo-halal"
            className="!w-[175px] md:!w-[200px] lg:!w-[250px]"
          />
          <Image
            src="icons/home/logo-urs.svg"
            width={100}
            height={100}
            alt="logo-urs"
            className="!w-[240px] md:!w-[275px] lg:!w-[340px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
