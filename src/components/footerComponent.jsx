import Link from "next/link";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <div className="rectangleFooter lg:rectangleFooterLg text-secondary bg-third -mt-[88px] sm:-mt-[55px] md:-mt-[65px] lg:-mt-[127px] pt-[100px] pb-10 md:grid md:grid-cols-3 px-10">
      <div className="text-center md:text-start mx-5 mt-10">
        <h3 className="text-xl text-zink-900 mr-3 font-bold">
          <span className="hidden md:inline">|</span> ABOUT US
        </h3>

        <h4 className="text-lg font-bold my-3">
          PT. Blasfolie Internasional Indonesia
        </h4>

        <p className="text-md">
          PT. Blasfolie Internasional Indonesia (BFI) established back in 2016
          with the goal of becoming {"Indonesia's"} blown film specialist.
          Extensive thought and planning went into the development of three
          crucial aspects of a strong company: the right infrastructure, the
          right equipment, and most importantly the right people.
        </p>
      </div>

      <div className="text-center md:text-start mx-5 mt-10">
        <div>
          <h3 className="text-xl text-zink-900 mr-3 font-bold">
            <span className="hidden md:inline">|</span> WORKING HOURS
          </h3>

          <h4 className="text-lg font-bold my-3">
            Monday - Friday : 08:00 AM - 04:00 PM
          </h4>
        </div>

        <div className="mt-10 md:mt-16">
          <h3 className="text-xl text-zink-900 mr-3 font-bold">
            <span className="hidden md:inline">|</span> MAPS
          </h3>

          <h4 className="text-lg font-bold mt-3">
            PT. Blasfolie Internasional Indonesia
          </h4>

          <Image
            src="/icons/footer/logo-map.svg"
            width={0}
            height={0}
            className="inline w-7"
            alt="logo-map"
          />

          <p className="inline text-md ml-2">
            Jl. Harapan VIII, Lot LL-17, Kawasan Industri KIIC, Parungmulya
            Ciampel, Karawang, West Java 41361
          </p>

          <div className="mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0836196592336!2d107.29381447409858!3d-6.383208362434737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6975f480378e1f%3A0x517976add5ea2c35!2sPT%20Blasfolie%20Internasional%20Indonesia!5e0!3m2!1sen!2sid!4v1709626706390!5m2!1sen!2sid"
              className="rounded-xl mt-5 border-none w-full"
            />
          </div>
        </div>
      </div>

      <div className="text-center md:text-start mt-10 mx-5">
        <div>
          <h3 className="text-xl text-zink-900 mr-3 font-bold mb-3">
            <span className="hidden md:inline">|</span> PRODUCT
          </h3>

          <Link href="#" className="font-bold">
            <span className="text-amber-500 text-xl">{">"}</span>{" "}
            <span>PLAIN LLDPE FILM</span>
          </Link>
          <Link href="#" className="font-bold block">
            <span className="text-amber-500 text-xl">{">"}</span>{" "}
            <span>MASTERBATCH LLDPE FILM</span>
          </Link>
        </div>

        <div className="mt-10 md:mt-16">
          <h3 className="text-xl text-zink-900 mr-3 font-bold mb-3">
            <span className="hidden md:inline">|</span> CONTACT
          </h3>

          <Image
            src="/icons/footer/logo-phone.svg"
            width={0}
            height={0}
            className="inline w-7"
            alt="logo-phone"
          />

          <span className="ml-3">(0267) 8458855</span>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
