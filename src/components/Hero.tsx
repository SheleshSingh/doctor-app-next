"use client";
import { assets } from "@/assets/assets";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Grid
      size={{ xs: 12, md: 12 }}
      container
      spacing={2}
      bgcolor="#5F6FF0"
      borderRadius={2}
      mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
    >
      <Grid
        size={{ xs: 12, md: 6 }}
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography
          fontSize={{ xs: 20, sm: 24, md: 32, lg: 40, xl: 48 }}
          fontWeight={600}
          mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
          color="#fff"
        >
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
            <Typography
              color="#fff"
              fontSize={{ xs: 8, sm: 10, md: 12, lg: 14 }}
              fontWeight={500}
            >
              Simply browse through our extensive list of trusted doctors,
              <br />
              schedule your appointment hassle-free.
            </Typography>
          </Grid>
          <Grid container justifyContent={{ xs: "center", sm: "left" }}>
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
                  marginTop: { xs: 1.5, sm: 2, md: 3, lg: 4 },
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
        paddingX={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      >
        <Image
          src={assets.header_img}
          alt="header_img"
          width={500}
          style={{ height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
