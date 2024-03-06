import { Image, Collapse } from "antd";
import faqList from "@/utils/home/faqList";

const Faq = () => {
  return (
    <div className="bg-seventh rectangleFaq lg:rectangleFaqLg flex flex-wrap pb-24 sm:pb-42 sm:pt-5 sm:pb-10 md:pt-5 md:pb-10 lg:pt-10 lg:pb-20">
      <div className="mx-auto mt-10 sm:mt-28 md:mt-24 lg:mt-0 lg:mb-20 relative">
        {/* Rectangle Group Start */}
        <div className="mx-5">
          <div className="inline">
            <Image
              src="/icons/home/rectangle-faq.svg"
              className="!w-32 md:!w-44 lg:!w-[300px]"
            />
          </div>

          <div className="inline -ml-28 md:-ml-[150px] lg:-ml-[280px]">
            <Image
              src="/icons/home/rectangle-faq.svg"
              className="!w-32 md:!w-44 lg:!w-[300px]"
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
        <Collapse
          items={faqList}
          bordered={false}
          size="small"
          className="bg-secondary text-xl md:text-2xl"
        />
      </div>
    </div>
  );
};

export default Faq;
