import React from "react";
import Image from "next/image";
import ProductCarousel from "./productCarousel";

const OurProducts = () => {
  return (
    <div className="w-full bg-gradient-to-b from-fifth via-sixth to-primary/0 pt-10">
      <h1 className=" text-secondary font-bold text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        OUR PRODUCTS
      </h1>

      <ProductCarousel />

      <div className="text-secondary sm:text-zinc-950 pb-10">
        <h5 className="text-center tracking-wide font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          WORK OF EXCELLENCE
        </h5>

        <h1 className="font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl">
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
