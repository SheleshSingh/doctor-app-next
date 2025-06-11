import HeroSection from "@/components/Hero";
import SpecialityMenu from "@/components/SpecialityMenu";
import { Grid } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Grid>
      <HeroSection />
      <SpecialityMenu />
    </Grid>
  );
};

export default HomePage;
