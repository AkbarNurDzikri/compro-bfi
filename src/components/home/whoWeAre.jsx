import Image from "next/image";
import teamIcon from "../../../public/icons/icons8-team-50 1.svg";
import likeIcon from "../../../public/icons/like_4926585 1.svg";
import trophyIcon from "../../../public/icons/trophy_10542632 1.svg";
import configIcon from "../../../public/icons/image 1.svg";
import globeIcon from "../../../public/icons/Ellipse 16.svg";

const WhoWheAre = () => {
  return (
    <>
      <div className="w-full h-24 sm:h-32 lg:h-40 bg-gradient-to-b from-third to-third/0 opacity-80 -mt-5 sm:-mt-7">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-secondary pt-8 sm:pt-12">
          WHO WE ARE
        </h1>
      </div>

      <div className="px-8 sm:px-24 md:px-32 sm:flex bg-gradient-to-b from-third/0 to-secondary">
        <div className="py-5 sm:py-14">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-5">
            <span className="font-semibold">
              PT. Blasfolie Internasional Indonesia (BFI)
            </span>{" "}
            established back in 2016 with the goal of becoming {"Indonesia's"}{" "}
            Blownfilm Specialist.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-5">
            Extensive thought and planning went into the development of three
            crucial aspects of a strong company:
          </p>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
            The right infrastructure, the right equipment, and most importantly
            the right people.
          </p>
        </div>

        <div className="mb-10 sm:py-14 grid grid-cols-2 sm:grid-cols-none">
          <div className="mb-5 sm:grid sm:grid-cols-2">
            <Image
              src={teamIcon}
              className="w-10 mx-auto sm:inline"
              alt="icon"
            />
            <h4 className="text-sm max-w-20 sm:max-w-full mx-auto md:text-md lg:text-lg font-bold sm:inline">
              TEAM OF PROFESSIONAL
            </h4>
          </div>

          <div className="mb-5 sm:grid sm:grid-cols-2">
            <Image
              src={likeIcon}
              className="w-10 mx-auto sm:inline"
              alt="icon"
            />
            <h4 className="text-sm max-w-20 sm:max-w-full mx-auto md:text-md lg:text-lg font-bold sm:inline">
              GUIDED BY COMMITMENT
            </h4>
          </div>

          <div className="mb-5 sm:grid sm:grid-cols-2">
            <Image
              src={trophyIcon}
              className="w-8 mx-auto sm:inline"
              alt="icon"
            />
            <h4 className="text-sm max-w-20 sm:max-w-full mx-auto md:text-md lg:text-lg font-bold sm:inline">
              REPUTATION FOR EXCELLENCE
            </h4>
          </div>

          <div className="mb-5 sm:grid sm:grid-cols-2">
            <Image
              src={configIcon}
              className="w-8 mx-auto sm:inline"
              alt="icon"
            />
            <h4 className="text-sm max-w-20 sm:max-w-full mx-auto md:text-md lg:text-lg font-bold sm:inline">
              WE BUILD PARTNERSHIPS
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="w-full h-96 md:h-[500px] bg-fourth polygonLeft md:polygonLeftMd -mt-[300px]"></div>

        <div className="w-full h-72 md:h-[500px] bg-third polygonRight grid grid-cols-4 md:grid-cols-5 -mt-[115px] md:-mt-[200px]">
          <div className="text-white border border-dotted border-primary hidden md:block"></div>

          <div className="text-white border border-dotted border-primary flex justify-center items-end">
            <div className="mb-5">
              <h4 className="text-center text-white text-md sm:text-2xl lg:text-3xl font-semibold md:font-bold">
                Customers
              </h4>
              <h3 className="text-white text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold text-center mt-16 md:mt-20 lg:mt-24">
                100+
              </h3>
            </div>
          </div>

          <div className="text-white border border-dotted border-primary flex justify-center items-end">
            <div className="mb-5">
              <h4 className="text-center text-white text-md sm:text-2xl lg:text-3xl font-semibold md:font-bold">
                Supplied
              </h4>
              <h3 className="text-white text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold text-center mt-16 md:mt-20 lg:mt-24">
                5 Billion {"Kg's"}
              </h3>
            </div>
          </div>

          <div className="text-white border border-dotted border-primary flex justify-center items-end">
            <div className="mb-5">
              <h4 className="text-center text-white text-md sm:text-2xl lg:text-3xl font-semibold md:font-bold">
                Experience
              </h4>
              <h3 className="text-white text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold text-center mt-16 md:mt-20 lg:mt-24">
                25+
              </h3>
            </div>
          </div>
          <div className="text-white border border-dotted border-primary flex justify-center items-end">
            <Image
              src={globeIcon}
              className="w-32 md:w-48 lg:w-56 ml-auto"
              alt="globe-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWheAre;
