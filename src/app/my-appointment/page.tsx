"use client";
import { doctors } from "@/assets/assets";
import { AppContext } from "@/context/AppContext";
import { DoctorProps } from "@/types";
import { Button, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";

const MyAppointmentPage = () => {
  const context = useContext(AppContext);
  if (!context || !context.doctors) {
    return null;
  }
  return (
    <Grid>
      <Typography
        fontSize={{ xs: 12, sm: 16, md: 20, lg: 24 }}
        color="#4B5563"
        mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      >
        My appointments
      </Typography>
      <Grid size={{ xs: 12, md: 12 }} mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
        {doctors.slice(0, 2).map((item: DoctorProps, index) => (
          <Grid key={index}>
            <Divider sx={{ marginTop: 2 }} />
            <Grid size={{ xs: 12, md: 12 }} container spacing={2} mt={2} mb={2}>
              <Grid size={{ xs: 12, md: 2 }}>
                <Image
                  src={item.image}
                  alt="image"
                  style={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "#EAEFFF",
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 7 }} color="#4B5563">
                <Typography
                  fontSize={{ xs: 16, sm: 18, md: 20, lg: 22 }}
                  color="#262626"
                >
                  {item.name}
                </Typography>
                <Typography fontSize={{ xs: 10, sm: 12, md: 14, lg: 16 }}>
                  {item.speciality}
                </Typography>
                <Typography
                  fontSize={{ xs: 10, sm: 12, md: 14, lg: 16 }}
                  fontWeight={600}
                  mt={2}
                >
                  Address:
                </Typography>
                <Typography fontSize={{ xs: 8, sm: 10, md: 12, lg: 14 }}>
                  {item.address.line1}
                </Typography>
                <Typography fontSize={{ xs: 8, sm: 10, md: 12, lg: 14 }}>
                  {item.address.line2}
                </Typography>
                <Typography fontSize={{ xs: 8, sm: 10, md: 12, lg: 14 }} mt={2}>
                  <span>Date & Time: 25, July, 2024 | 8:30 PM</span>
                </Typography>
              </Grid>
              <Grid
                size={{ xs: 12, md: 3 }}
                container
                direction="column"
                justifyContent="end"
                alignItems="flex-end"
              >
                <Button
                  sx={{
                    width: 200,
                    color: "#000",
                    borderRadius: 0,
                    border: "1px solid #BABABA",
                    "&:hover": { backgroundColor: "#5F6FFF", color: "#ffffff" },
                  }}
                >
                  Pay online
                </Button>
                <Button
                  sx={{
                    width: 200,
                    border: "1px solid #BABABA",
                    borderRadius: 0,
                    color: "#000",
                    "&:hover": { backgroundColor: "red", color: "#ffffff" },
                  }}
                >
                  Cancel appointment
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Divider />
    </Grid>
  );
};

export default MyAppointmentPage;
