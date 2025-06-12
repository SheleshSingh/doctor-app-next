"use client";
import { assets } from "@/assets/assets";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <Grid
      size={{ xs: 12, md: 12 }}
      container
      mt={5}
      spacing={2}
      bgcolor="#5F6FFF"
      borderRadius={2}
    >
      <Grid size={{ xs: 12, md: 7 }} container direction="column" padding={6}>
        <Typography fontSize={40} fontWeight={600} color="#fff" mt={5}>
          Book Appointment <br /> With 100+ Trusted Doctors
        </Typography>

        <Link href="/login">
          <Button
            sx={{
              backgroundColor: "#ffffff",
              color: "#595959",
              borderRadius: 5,
              padding: "8px 15px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => scrollTo(0, 0)}
          >
            Create account
          </Button>
        </Link>
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }}
        container
        alignItems="flex-end"
        justifyContent="center"
        sx={{ position: "relative" }}
      >
        <Image
          src={assets.appointment_img}
          alt="Appointment"
          width={320}
          style={{
            height: "auto",
            position: "absolute",
            bottom: 0,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Banner;
