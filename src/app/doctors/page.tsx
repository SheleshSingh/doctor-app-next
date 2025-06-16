"use client";
import DoctorCards from "@/components/DoctorCards";
import { AppContext } from "@/context/AppContext";
import { Grid } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";

const AllDoctors = () => {
  const context = useContext(AppContext);
  if (!context || !context.doctors) {
    return null; // or a loading/error message
  }
  const { doctors } = context;
  return (
    <Grid size={{ xs: 12, md: 9 }} mt={5}>
      <Grid container spacing={2} mt={1}>
        {doctors.map((item, index) => (
          <Grid size={{ xs: 12, md: 3 }} container direction="row" key={index}>
            <Link href={`/my-appointment/${item._id}`}>
              <DoctorCards doctor={item} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default AllDoctors;
