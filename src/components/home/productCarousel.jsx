import { Swiper, SwiperSlide } from "swiper/react";
import productList from "@/utils/home/productList";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";

const ProductCarousel = () => {
  return (
    <>
      <Swiper spaceBetween={0} slidesPerView={1}>
        {productList.map((product) => (
          <SwiperSlide key={product.categoryName}>
            <div className="bg-seventh w-[300px] md:w-[350px] lg:w-[400px] h-[400px] md:h-[475px] lg:h-[500px] mx-auto p-5 mt-10 rounded-lg">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-5">
                {product.categoryName}
              </h1>

              <div className="w-full h-[250px] md:h-[300px] lg:h-[325px] p-5 rounded-lg bg-secondary flex justify-center items-center mx-auto">
                <Image
                  src={product.pathImage}
                  alt={`image-${product.categoryName}`}
                  width={0}
                  height={0}
                  priority={true}
                  className={`mx-auto w-full rounded-lg`}
                />
              </div>

              <div className="bg-primary w-full text-center p-2 mt-5 rounded-lg text-secondary font-bold text-lg md:text-xl lg:text-2xl">
                <Link href="#" className="text-center">
                  See more
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductCarousel;
