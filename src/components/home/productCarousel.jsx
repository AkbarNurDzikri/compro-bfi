import { Swiper, SwiperSlide } from "swiper/react";
import productList from "@/utils/home/productList";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
// import { getStaticPaths } from "next";

const ProductCarousel = () => {
  return (
    <>
      <Swiper spaceBetween={0} slidesPerView={1}>
        {productList.map((product) => (
          <SwiperSlide key={product.categoryName}>
            <div className="bg-slate-100/5 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] mx-auto p-5 mt-10 rounded-lg">
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary text-center mb-5">
                {product.categoryName}
              </h1>
              <Image
                src={product.pathImage}
                alt={`image-${product.categoryName}`}
                width={0}
                height={0}
                priority={true}
                className={`mx-auto ${product.width} ${product.height}`}
              />
              <div className="bg-primary w-full text-center p-2 mt-5 rounded-lg text-secondary font-bold text-lg">
                <Link href="#" className="text-center">
                  See more
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        //{" "}
      </Swiper>
    </>
  );
};

export default ProductCarousel;
