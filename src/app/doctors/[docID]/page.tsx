"use client";
import DoctorCards from "@/components/DoctorCards";
import { AppContext } from "@/context/AppContext";
import { doctorLists } from "@/mockData";
import { Grid, Typography } from "@mui/material";
import { useContext } from "react";

const DocId = ({ params }: { params: Promise<{ docID: string }> }) => {
  const { docID } = params;
  const context = useContext(AppContext);
  if (!context || !context.doctors) {
    return null;
  }
  const { doctors } = context;

  return (
    <>
      <Typography mt={5}>Browse through the doctors specialist.</Typography>
      <Grid size={{ xs: 12, md: 12 }} container spacing={2} mt={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          {doctorLists.map((item) => (
            <Typography
              border={"1px solid #C9D8FF"}
              borderRadius={2}
              padding={1}
              key={item}
              m={1}
            >
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          {doctors.map((doctor, index) => (
            <DoctorCards key={index} doctor={doctor} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default DocId;
