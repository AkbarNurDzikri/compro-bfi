const Hero = () => {
  return (
    <div
      className="w-full h-[325px] sm:h-[350px] md:h-[450px] lg:h-[525px] bg-cover sm:bg-center md:bg-cover lg:bg-bottom transform duration-300"
      style={{
        backgroundImage: "url(/img/home/hero/hero-image2.svg)",
      }}
    >
      <h1 className="text-secondary font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-[50px] pl-10 sm:pl-14 pt-24 md:pt-32 lg:pt-28 md:pl-20 lg:pl-32 mb-5 md:mb-8 lg:mb-10 sm:tracking-wide transform duration-300">
        {"INDONESIA'S"} BLOWNFILM SPECIALIST
      </h1>

      <a
        href="#"
        className="text-secondary font-semibold text-xl sm:text-2xl lg:text-3xl lg:font-bold bg-primary px-8 py-2 md:py-4 sm:px-5 md:px-10 ml-10 sm:ml-14 md:ml-20 lg:ml-32 rounded-lg shadow-lg shadow-stone-950 transform duration-300 group hover:bg-sky-600"
      >
        <span className="group-hover:text-white">CONTACT US</span>
      </a>
    </div>
  );
};

export default Hero;
