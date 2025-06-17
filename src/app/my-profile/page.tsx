"use client";
import { assets } from "@/assets/assets";
import {
  Button,
  Divider,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const MyProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "test@gmail.com",
    phone: "1234567890",
    address: {
      line1: "57th Cross, Richmond City, Country",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "1990-01-01",
  });
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Grid
      maxWidth="sm"
      container
      direction="column"
      spacing={2}
      mt={{ xs: 2, sm: 3, md: 4, lg: 5 }}
    >
      <Image
        src={userData.image}
        alt={userData.name}
        style={{ width: "150px", height: "auto", borderRadius: 5 }}
      />
      {isEdit ? (
        <TextField
          name="name"
          size="small"
          value={userData.name}
          onChange={handleChange}
          style={{ border: "none" }}
        />
      ) : (
        <Typography
          fontSize={{ xs: 14, sm: 20, md: 24, lg: 30 }}
          fontWeight={500}
        >
          {userData.name}
        </Typography>
      )}
      <Divider />
      <Typography color="#797979" fontSize={{ xs: 10, sm: 12, md: 14, lg: 16 }}>
        CONTACT INFORMATION
      </Typography>
      <Grid container alignItems="center" spacing={5}>
        <Typography>Email id:</Typography>
        <Typography color="#3C96FF">{userData.email}</Typography>
      </Grid>
      <Grid container alignItems="center" spacing={5}>
        <Typography>Phone:</Typography>
        {isEdit ? (
          <TextField
            name="phone"
            size="small"
            value={userData.phone}
            onChange={handleChange}
          />
        ) : (
          <Typography color="#3C96FF">{userData.phone}</Typography>
        )}
      </Grid>
      <Grid container spacing={5}>
        <Typography>Address:</Typography>
        {isEdit ? (
          <>
            <TextField
              name="address"
              size="small"
              value={userData.address.line1}
              onChange={handleChange}
            />
            <TextField
              name="address"
              size="small"
              value={userData.address.line2}
              onChange={handleChange}
            />
          </>
        ) : (
          <Typography>
            {userData.address.line1} <br /> {userData.address.line2}
          </Typography>
        )}
      </Grid>
      <Grid container direction="column" spacing={2}>
        <Typography
          fontSize={{ xs: 10, sm: 12, md: 14, lg: 16 }}
          color="#797979"
        >
          BASIC INFORMATION
        </Typography>
        <Grid container alignItems="center" spacing={5}>
          <Typography>Gender:</Typography>
          {isEdit ? (
            <Select
              value={userData.gender}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          ) : (
            <Typography>{userData.gender}</Typography>
          )}
        </Grid>
      </Grid>

      <Grid container alignItems="center" spacing={5}>
        <Typography>DOB:</Typography>
        {isEdit ? (
          <TextField
            name="dob"
            type="date"
            size="small"
            value={userData.dob}
            onChange={handleChange}
          />
        ) : (
          <Typography>{userData.dob}</Typography>
        )}
      </Grid>
      <Grid>
        {isEdit ? (
          <Button
            onClick={() => setIsEdit(false)}
            sx={{
              border: "1px solid #5F6FFF",
              color: "#4B5563",
              backgroundColor: "#ffffff",
              borderRadius: 5,
            }}
          >
            Save information
          </Button>
        ) : (
          <Button
            onClick={() => setIsEdit(true)}
            sx={{
              border: "1px solid #5F6FFF",
              color: "#4B5563",
              backgroundColor: "#ffffff",
              borderRadius: 5,
            }}
          >
            Edit
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default MyProfilePage;
