"use client";
import { specialityData } from "@/assets/assets";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const SpecialityMenu = () => {
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      mt={5}
      id="speciality"
    >
      <Typography
        fontSize={{ xs: 24, sm: 28, md: 30, lg: 32 }}
        fontWeight={600}
      >
        Find by Speciality
      </Typography>
      <Typography
        fontSize={{ xs: 12, sm: 14, md: 16, lg: 18 }}
        fontWeight={500}
        mt={1}
        textAlign="center"
        color="#4B5563"
      >
        Simply browse through our extensive list of trusted doctors, schedule{" "}
        <br />
        your appointment hassle-free.
      </Typography>
      <Grid container mt={5} spacing={3} justifyContent="center">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            href={`/doctors/${item.speciality}`}
            key={index}
          >
            <Grid
              sx={{
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-15px)",
                  cursor: "pointer",
                },
              }}
            >
              <Image
                src={item.image}
                alt={item.image}
                width={80}
                style={{ height: "auto" }}
              />
              <Typography textAlign="center" fontSize={12}>
                {item.speciality}
              </Typography>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default SpecialityMenu;
