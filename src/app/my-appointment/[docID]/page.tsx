"use client";
import { assets } from "@/assets/assets";
import RelatedDoctors from "@/components/RaletedDoctors";
import { AppContext } from "@/context/AppContext";
import { daysOfWeek } from "@/mockData";
import { DoctorProps } from "@/types";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { use, useContext, useEffect, useState } from "react";

const AppointmentDetails = ({
  params,
}: {
  params: Promise<{ docID: string }>;
}) => {
  const { docID } = use(params);
  const context = useContext(AppContext);
  const [infoDoc, setInfoDoc] = useState<DoctorProps | null>(null);
  const [docSlots, setDocSlots] = useState<
    { datetime: Date; time: string }[][]
  >([]);
  const [slotIndex, setSlotIndex] = useState<number>(0);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const doctors = context?.doctors || [];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docID);
    setInfoDoc(docInfo ?? null);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      const timeSlots: { datetime: Date; time: string }[] = [];

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
        while (currentDate < endTime) {
          const formattedTime = currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }
      }
      setDocSlots((prevSlots) => [...prevSlots, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docID, doctors]);

  useEffect(() => {
    getAvailableSlots();
  }, [infoDoc]);
  useEffect(() => {}, [docSlots]);

  return (
    <Grid size={{ xs: 12, md: 12 }}>
      <Grid size={{ xs: 12, md: 12 }} container spacing={2} mt={2}>
        <Grid size={{ xs: 12, md: 2 }}>
          {infoDoc?.image && (
            <Image
              src={infoDoc.image}
              alt="doctor"
              style={{
                height: "240px",
                width: "240px",
                backgroundColor: "#5F6FFF",
                borderRadius: 5,
              }}
            />
          )}
        </Grid>
        <Grid
          size={{ xs: 12, md: 10 }}
          border={"1px solid #4B5563"}
          borderRadius={2}
          padding={2}
        >
          <Grid container spacing={1}>
            <Typography fontSize={20} fontWeight={600}>
              {infoDoc?.name}
            </Typography>
            <Image
              src={assets.verified_icon}
              alt="doctor"
              width={12}
              height={12}
            />
          </Grid>
          <Grid container spacing={1} mt={1}>
            <Typography fontSize={14} color="#4B5563">
              {infoDoc?.degree} - {infoDoc?.speciality}
            </Typography>
            <Typography
              fontSize={12}
              color="#4B5563"
              borderRadius={5}
              border={"1px solid #4B5563"}
              paddingX={1}
              paddingY={0.3}
            >
              {infoDoc?.experience}
            </Typography>
          </Grid>
          <Grid container alignItems="center" spacing={1} mt={1}>
            <Typography fontSize={14} fontWeight={500} color="#1F2937">
              About
            </Typography>
            <Image src={assets.info_icon} alt="info" width={10} height={10} />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }} mt={1}>
            <Typography fontSize={12} color={"#4B5563"}>
              {infoDoc?.about}
            </Typography>
          </Grid>
          <Typography fontSize={14} color="#4B5563" mt={1}>
            Appointment fee:{" "}
            <span style={{ color: "#000" }}>${infoDoc?.fees}</span>
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }} container justifyContent="right" mt={2}>
          <Grid size={{ xs: 12, md: 10 }} padding={2}>
            <Typography fontSize={18} fontWeight={500} color="#565656">
              Booking slots
            </Typography>
            <Grid container spacing={1} mt={2}>
              {docSlots.length > 0 &&
                docSlots.map((item, index) => (
                  <Grid
                    key={index}
                    container
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                    border={"1px solid #DDDDDD"}
                    width={60}
                    padding={1}
                    borderRadius={5}
                    color={slotIndex === index ? "#FFFFFF" : "#4B5563"}
                    bgcolor={slotIndex === index ? "#5F6FFF" : "#FFFFFF"}
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => setSlotIndex(index)}
                  >
                    <Typography>
                      {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                    </Typography>
                    <Typography>
                      {item[0] && item[0].datetime.getDate()}
                    </Typography>
                  </Grid>
                ))}
            </Grid>
            <Grid container spacing={1} mt={2}>
              {docSlots.length &&
                docSlots[slotIndex].map((item, index) => (
                  <Grid
                    key={index}
                    border={"1px solid #DDDDDD"}
                    borderRadius={5}
                    width={100}
                    marginRight={1}
                    textAlign={"center"}
                    onClick={() => setTimeSlot(item.time)}
                    bgcolor={timeSlot === item.time ? "#5F6FFF" : "#FFFFFF"}
                    color={timeSlot === item.time ? "#FFFFFF" : "#4B5563"}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <Typography>{item.time.toLowerCase()}</Typography>
                  </Grid>
                ))}
            </Grid>
            <Button
              sx={{
                backgroundColor: "#5F6FFF",
                color: "#FFFFFF",
                marginTop: 5,
                padding: "10px 20px",
                borderRadius: 5,
              }}
            >
              Book an appointment
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <RelatedDoctors docID={docID} speciality={infoDoc?.speciality ?? ""} />
    </Grid>
  );
};

export default AppointmentDetails;
