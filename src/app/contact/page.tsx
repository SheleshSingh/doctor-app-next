"use client";
import { assets } from "@/assets/assets";
import useResponsive from "@/hooks/useResponsive";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  return (
    <Grid>
      <Typography
        textAlign="center"
        mt={isMobile ? 2 : isTablet ? 3 : isDesktop ? 5 : 6}
        fontSize={isMobile ? 20 : isTablet ? 24 : isDesktop ? 30 : 34}
        color="#4B5563"
      >
        CONTACT <span style={{ color: "#000" }}>US</span>
      </Typography>
      <Grid
        size={{ xs: 12, md: 12 }}
        container
        justifyContent="center"
        mt={isMobile ? 2 : isTablet ? 3 : isDesktop ? 5 : 6}
        spacing={isMobile ? 1.5 : isTablet ? 3 : isDesktop ? 4 : 5}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Image
            src={assets.contact_image}
            alt="Contact Us"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }} padding={2}>
          <Typography
            fontSize={isMobile ? 16 : isTablet ? 18 : isDesktop ? 20 : 22}
            fontWeight={600}
            color="#4B5563"
            mt={isMobile ? 2 : isTablet ? 3 : isDesktop ? 5 : 6}
          >
            OUR OFFICE
          </Typography>
          <Typography color="#4B5563" mt={2} fontSize={14}>
            54709 Willms Station <br /> Suite 350, Washington, USA
          </Typography>
          <Typography color="#4B5563" mt={2} fontSize={14}>
            Tel: (415) 555‑0132
          </Typography>
          <Typography color="#4B5563" mt={2} fontSize={14}>
            Email: sheleshsingh755@gmail.com
          </Typography>
          <Typography
            color="#4B5563"
            mt={isMobile ? 2 : isTablet ? 3 : isDesktop ? 5 : 6}
            fontSize={isMobile ? 16 : isTablet ? 18 : isDesktop ? 20 : 22}
            fontWeight={600}
          >
            CAREERS AT PRESCRIPTO
          </Typography>
          <Typography color="#4B5563" mt={2} fontSize={14}>
            Learn more about our teams and job openings.
          </Typography>
          <Button
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#4B5563",
              padding: "10px 15px",
              marginTop: isMobile ? 2 : isTablet ? 3 : isDesktop ? 5 : 6,
              border: "1px solid #4B5563",
              borderRadius: 0,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#000",
                color: "#FFFFFF",
                transform: "scale(1.05)",
              },
            }}
          >
            Explore Jobs
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
