import { DoctorProps } from "@/types";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const DoctorCards = ({ doctor }: { doctor: DoctorProps }) => {
  return (
    <Grid
      border={"1px solid #C9D8FF"}
      borderRadius={2}
      overflow={"hidden"}
      sx={{
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-15px)",
          cursor: "pointer",
        },
      }}
    >
      <Image
        src={doctor.image}
        alt={doctor.name}
        width={200}
        height={200}
        style={{ backgroundColor: "#C9D8FF", width: "100%" }}
      />
      <Grid container padding={1} direction="column">
        <Grid container alignItems="center" gap={1} mt={1}>
          <Grid
            width={8}
            height={8}
            bgcolor="#0FBF00"
            borderRadius="50%"
          ></Grid>
          <Grid fontSize={12} color="#0FBF00">
            Available
          </Grid>
        </Grid>
        <Typography fontSize={16} fontWeight={500}>
          {doctor.name}
        </Typography>
        <Typography fontSize={12} color="#4B5563">
          {doctor.speciality}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DoctorCards;
