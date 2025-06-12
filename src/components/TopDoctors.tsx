import { Button, Grid, Typography } from "@mui/material";
import DoctorCards from "./DoctorCards";
import { doctors } from "@/assets/assets";
import Link from "next/link";

const TopDoctors = () => {
  return (
    <Grid>
      <Typography fontSize={30} fontWeight={600} mt={5} textAlign="center">
        Top Doctors to Book
      </Typography>
      <Typography
        fontSize={16}
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
      <Grid container justifyContent="center" mt={3}>
        <Button
          sx={{
            width: "150px",
            height: "40px",
            backgroundColor: "#EAEFFF",
            color: "#4B5563",
            borderRadius: 5,
          }}
        >
          More
        </Button>
      </Grid>
    </Grid>
  );
};

export default TopDoctors;
