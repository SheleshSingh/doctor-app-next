"use client";
import { assets } from "@/assets/assets";
import { aboutCardData } from "@/mockData";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <Grid>
      <Typography
        color="#4B5563"
        fontSize={{ xs: 24, sm: 30, md: 34, lg: 36 }}
        textAlign="center"
        mt={{ xs: 2, sm: 3, md: 5, lg: 6 }}
      >
        ABOUT <span style={{ color: "#000" }}>US</span>
      </Typography>
      <Grid
        size={{ xs: 12, md: 12 }}
        container
        mt={{ xs: 2, sm: 3, md: 5, lg: 6 }}
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
          spacing={{ xs: 1.5, sm: 3, md: 4, lg: 5 }}
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
          fontSize={{ xs: 20, sm: 24, md: 30, lg: 30 }}
          mt={{ xs: 2, sm: 3, md: 5, lg: 6 }}
          textAlign={{ xs: "center", sm: "left" }}
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
                padding={{ xs: 5, sm: 6, md: 7, lg: 9 }}
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
                  fontSize={{ xs: 8, sm: 10, md: 12, lg: 14 }}
                  mt={{ xs: 2, sm: 3, md: 5, lg: 6 }}
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
