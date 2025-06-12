"use client";
import { specialityData } from "@/assets/assets";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpecialityMenu = () => {
  return (
    <Grid size={{ xs: 12, md: 12 }} mt={5} id="speciality">
      <Grid container alignItems="center" direction="column" mt={2}>
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
                  "&:hover": {
                    transform: "translateY(-10px)",
                    transition: "all 0.1s ease-in-out",
                    cursor: "pointer",
                  },
                }}
              >
                <Image
                  src={item.image}
                  alt={item.image}
                  width={100}
                  height={100}
                />
                <Typography textAlign="center" fontSize={12}>
                  {item.speciality}
                </Typography>
              </Grid>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SpecialityMenu;
