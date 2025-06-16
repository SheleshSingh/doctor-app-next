"use client";
import { assets } from "@/assets/assets";
import useResponsive from "@/hooks/useResponsive";
import { aboutCardData } from "@/mockData";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  return (
    <Grid>
      <Typography
        color="#4B5563"
        fontSize={isMobile ? 24 : isTablet ? 30 : isDesktop ? 34 : 36}
        textAlign="center"
        mt={isMobile ? 2 : isTablet ? 3 : isDesktop ? 5 : 6}
      >
        ABOUT <span style={{ color: "#000" }}>US</span>
      </Typography>
      <Grid
        size={{ xs: 12, md: 12 }}
        container
        mt={isMobile ? 2 : isTablet ? 3 : isDesktop ? 5 : 6}
        spacing={3}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Image
            src={assets.about_image}
            alt="About Us"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 8 }}
          container
          spacing={isMobile ? 1.5 : isTablet ? 3 : isDesktop ? 4 : 5}
          direction="column"
          padding={2}
          color="#4B5563"
        >
          <Typography>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </Typography>
          <Typography>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether youre booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </Typography>
          <Typography fontWeight={600}>Our Vision.</Typography>
          <Typography>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Typography
          color="#4B5563"
          fontSize={isMobile ? 20 : isTablet ? 24 : isDesktop ? 30 : 30}
          mt={isMobile ? 2 : isTablet ? 3 : isDesktop ? 5 : 6}
          textAlign={isMobile ? "center" : "left"}
        >
          WHY <span style={{ color: "#171717" }}>CHOOSE US</span>
        </Typography>
        <Grid size={{ xs: 12, md: 12 }} container mt={3}>
          <Grid size={{ xs: 12, md: 12 }} container>
            {aboutCardData.map((item, index) => (
              <Grid
                size={{ xs: 12, md: 4 }}
                border={`1px solid #E5E7EB`}
                key={index}
                padding={isMobile ? 5 : isTablet ? 6 : isDesktop ? 7 : 9}
                sx={{
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#5F6FFF",
                    color: "#fff",
                  },
                }}
              >
                <Typography fontWeight={600}>{item.title}</Typography>
                <Typography
                  fontSize={isMobile ? 8 : isTablet ? 10 : isDesktop ? 12 : 14}
                  mt={isMobile ? 2 : isTablet ? 3 : isDesktop ? 5 : 6}
                >
                  {item.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutPage;
