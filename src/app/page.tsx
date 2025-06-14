import Banner from "@/components/banner";
import HeroSection from "@/components/Hero";
import SpecialityMenu from "@/components/SpecialityMenu";
import TopDoctors from "@/components/TopDoctors";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </>
  );
};

export default HomePage;
