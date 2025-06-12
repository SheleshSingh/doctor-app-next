import { assets } from "@/assets/assets";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <Grid
      size={{ xs: 12, md: 12 }}
      container
      spacing={2}
      bgcolor="#5F6FFF"
      borderRadius={2}
      mt={5}
    >
      <Grid
        size={{ xs: 12, md: 6 }}
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography fontSize={40} fontWeight={600} color="#fff">
          Book Appointment <br />
          With Trusted Doctors
        </Typography>
        <Grid>
          <Grid container alignItems="center" justifyContent="center" gap={2}>
            <Image
              src={assets.group_profiles}
              alt="doctor_img"
              width={80}
              style={{ height: "auto" }}
            />
            <Typography color="#fff" fontSize={12} fontWeight={500}>
              Simply browse through our extensive list of trusted doctors,
              <br />
              schedule your appointment hassle-free.
            </Typography>
          </Grid>
          <Grid>
            <Link href="#speciality">
              <Button
                endIcon={
                  <Image
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                    width={10}
                    style={{ height: "auto" }}
                  />
                }
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#595959",
                  borderRadius: 5,
                  padding: "8px 15px",
                  marginTop: 2,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                Book appointment
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        container
        alignItems="flex-end"
        justifyContent="center"
        paddingX={4}
      >
        <Image
          src={assets.header_img}
          alt="header_img"
          width={550}
          style={{ height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
