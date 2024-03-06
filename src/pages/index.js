import Hero from "@/components/home/hero";
import WhoWheAre from "@/components/home/whoWeAre";
import OurProducts from "@/components/home/ourProducts";
import Faq from "@/components/home/faq";
import FooterComponent from "@/components/footerComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWheAre />
      <OurProducts />
      <Faq />
      <FooterComponent />
    </>
  );
}
