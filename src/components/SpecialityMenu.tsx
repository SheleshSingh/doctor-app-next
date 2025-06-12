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
      <Typography fontSize={30} fontWeight={600}>
        Find by Speciality
      </Typography>
      <Typography
        fontSize={16}
        fontWeight={500}
        mt={1}
        textAlign="center"
        color="#4B5563"
      >
        Simply browse through our extensive list of trusted doctors, schedule{" "}
        <br />
        your appointment hassle-free.
      </Typography>
      <Grid container mt={5} gap={3} justifyContent="center">
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
                width={100}
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
