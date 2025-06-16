"use client";
import { AppContext } from "@/context/AppContext";
import { Grid, Typography } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import DoctorCards from "./DoctorCards";
import Link from "next/link";
import { DoctorProps } from "@/types";

const RelatedDoctors = ({
  docID,
  speciality,
}: {
  docID: string;
  speciality: string;
}) => {
  const context = useContext(AppContext);
  const doctors = useMemo(() => context?.doctors ?? [], [context?.doctors]);
  const [ralDoc, setRalDoc] = useState<DoctorProps[]>([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docID
      );
      console.log(doctorsData, " doctorsData");
      setRalDoc(doctorsData);
    }
  }, [doctors, docID, speciality]);

  return (
    <Grid
      mt={5}
      container
      direction="column"
      spacing={1}
      justifyContent="center"
    >
      <Grid container direction="column" alignItems="center">
        <Typography fontSize={30} fontWeight={600} color="#1F2937">
          Related Doctors
        </Typography>
        <Typography color="#565656" fontSize={14}>
          Simply browse through our extensive list of trusted doctors.
        </Typography>
      </Grid>
      <Grid container mt={2} spacing={2} justifyContent="center">
        {ralDoc.slice(0, 5).map((item, index) => (
          <Grid key={index}>
            <Link
              href={`/my-appointment/${item._id}`}
              key={index}
              onClick={() => scrollTo(0, 0)}
            >
              <DoctorCards doctor={item} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default RelatedDoctors;
