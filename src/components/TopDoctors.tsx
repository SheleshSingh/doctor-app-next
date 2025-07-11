"use client";
import { Button, Grid, Typography } from "@mui/material";
import DoctorCards from "./DoctorCards";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const TopDoctors = () => {
  const context = useContext(AppContext);
  if (!context || !context.doctors) {
    return null;
  }
  const { doctors } = context;
  return (
    <Grid>
      <Typography
        fontSize={{ xs: 24, sm: 28, md: 30, lg: 32 }}
        fontWeight={600}
        mt={5}
        textAlign="center"
      >
        Top Doctors to Book
      </Typography>
      <Typography
        fontSize={{ xs: 12, sm: 14, md: 16, lg: 18 }}
        fontWeight={500}
        mt={1}
        textAlign="center"
        color="#4B5563"
      >
        Simply browse through our extensive list of trusted doctors.
      </Typography>

      <Grid mt={5} container justifyContent="center" spacing={2}>
        {doctors.slice(0, 10).map((doctor, index) => (
          <Grid size={{ xs: 12, md: 2.3 }} key={index}>
            <Link href={`/my-appointment/${doctor._id}`} key={index}>
              <DoctorCards doctor={doctor} />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" mt={5}>
        <Link href="/doctors">
          <Button
            sx={{
              width: "150px",
              height: "40px",
              backgroundColor: "#EAEFFF",
              color: "#4B5563",
              borderRadius: 5,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            More
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default TopDoctors;
