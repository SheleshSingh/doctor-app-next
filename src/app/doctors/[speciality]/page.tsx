"use client";
import DoctorCards from "@/components/DoctorCards";
import { AppContext } from "@/context/AppContext";
import { doctorLists } from "@/mockData";
import { DoctorProps } from "@/types";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import { use, useContext, useEffect, useState, useMemo } from "react";

const Speciality = ({
  params,
}: {
  params: Promise<{ speciality: string }>;
}) => {
  const { speciality } = use(params);
  const context = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState<DoctorProps[]>([]);

  const doctors = useMemo(() => context?.doctors || [], [context?.doctors]);

  useEffect(() => {
    const applyFilter = () => {
      if (speciality) {
        setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
      } else {
        setFilterDoc(doctors);
      }
    };

    applyFilter();
  }, [doctors, speciality]);

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
              paddingX={2}
              key={item}
              mt={1}
              sx={{ cursor: "pointer" }}
              bgcolor={speciality === item ? "#E2E5FF" : "transparent"}
            >
              <Link
                href={`/doctors/${item}`}
                onClick={() =>
                  speciality === item
                    ? setFilterDoc(doctors)
                    : setFilterDoc(
                        doctors.filter((doc) => doc.speciality === item)
                      )
                }
              >
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Grid container spacing={2} mt={1}>
            {filterDoc.map((item, index) => (
              <Grid
                size={{ xs: 12, md: 3 }}
                container
                direction="row"
                key={index}
              >
                <Link href={`/my-appointment/${item._id}`}>
                  <DoctorCards doctor={item} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Speciality;
