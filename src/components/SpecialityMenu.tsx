"use client";
import { specialityData } from "@/assets/assets";
import useResponsive from "@/hooks/useResponsive";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const SpecialityMenu = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      mt={5}
      id="speciality"
    >
      <Typography
        fontSize={isMobile ? 24 : isTablet ? 28 : isDesktop ? 30 : 32}
        fontWeight={600}
      >
        Find by Speciality
      </Typography>
      <Typography
        fontSize={isMobile ? 12 : isTablet ? 14 : isDesktop ? 16 : 18}
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
