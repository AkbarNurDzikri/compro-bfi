import Image from "next/image";
import AccordionFaq from "./accordionFaq";

const Faq = () => {
  return (
    <div className="bg-seventh rectangleFaq lg:rectangleFaqLg flex flex-wrap pb-24 sm:pb-42 sm:pt-5 sm:pb-10 md:pt-5 md:pb-10 lg:pt-10 lg:pb-20">
      <div className="mx-auto mt-10 sm:mt-28 md:mt-24 lg:mt-0 lg:mb-20 relative">
        {/* Rectangle Group Start */}
        <div className="mx-5">
          <div className="inline-block">
            <Image
              src="/icons/home/rectangle-faq.svg"
              width={0}
              height={0}
              className="w-32 md:w-44 lg:w-[300px]"
            />
          </div>

          <div className="inline-block -ml-28 md:-ml-[150px] lg:-ml-[280px]">
            <Image
              src="/icons/home/rectangle-faq.svg"
              width={0}
              height={0}
              className="w-32 md:w-44 lg:w-[300px]"
            />
          </div>
        </div>
        {/* Rectangle Group End */}

        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold absolute z-10 -mt-24 sm:-mt-32 md:-mt-36 lg:-mt-[225px] ml-5 lg:ml-20">
          Frequently
          <br />
          Asked Questions
        </h3>
      </div>

      <div className="w-2/3 lg:w-1/2 ml-auto mx-auto mb-14 mt-5">
        <AccordionFaq />
      </div>
    </div>
  );
};

export default Faq;
