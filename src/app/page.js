import React  from "react";
import HeroSection from "../../Components/Home/HeroSection";
import Carousel from "../../Components/Home/Carousel";
import Discount from "../../Components/Home/Discount";
import TrandingProducts from "../../Components/Home/TrandingProducts";
import PopularProducts from "../../Components/Home/PopularProducts";

export const metadata = {
  title: "ShopNow | An E Commerce Platform",
  description: "An E Commerce Platform",
};

const Home = () =>
{
  return (
    <>
      <HeroSection />
      <Carousel />
      <TrandingProducts />
      <Discount />
      <PopularProducts />
    </>
  )
};
export default Home;