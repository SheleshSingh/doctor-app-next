"use client";
import { assets } from "@/assets/assets";
import { adminLinks , dashboardCardData} from "@/mockData";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// interface DashboardProps{
//   name: string

// console.log(dashboardCardData,"dashboardCardData")

const DashboardPage = () => {
  const pathname = usePathname();
  return (
    <Grid>
      <Grid
        size={{ xs: 12, md: 12 }}
        container
        spacing={3}
      >
        <Grid  size={{ xs: 12, md: 4 }} container spacing={0}>
          <Grid sx={{ pt: 3 }}>
              {adminLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link key={link.title} href={link.path} passHref>
                    <Typography
                      color={isActive ? "#515151" : "inherit"}
                      fontSize={18}
                      sx={{
                        // color: isActive ? "#515151" : "inherit",
                        bgcolor: isActive ? "#F2F3FF" : "transparent",
                        borderRight: isActive ? "6px solid #5F6FFF" : "none",
                        p: "10px 20px",
                        textDecoration: isActive ? "underline" : "none",
                        textUnderlineOffset: isActive ? "8px" : "0px",
                        display: "block",
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Link>
                );
            })}
          </Grid>
        </Grid> 
        <Grid
          size={{ xs: 12, md: 8 }}
          container
          spacing={{ xs: 1.5, sm: 3, md: 4, lg: 5 }}
          direction="column"  
          rowSpacing={0}
        >
           <Grid container size={{ xs: 12, md: 12 }} spacing={3}>
            {dashboardCardData.map((item, index) => (
              <Grid 
                size={{ xs: 12, md: 4 }}
                key={index}
                sx={{
                  p: { xs: 1, sm: 1, md: 2, lg: 3 },
                  boxShadow: "0 0 4px rgba(0,0,0,0.1)",
                  borderRadius: "6px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  spacing={2}
                  sx={{ mb: 1 }}
                >
                  <Grid size={{ xs: 4, md: 2 }} sx={{ display: "flex", justifyContent: "center", position: "relative", cursor: "pointer" }}>
                    <Image
                      src={assets?.profile_pic}
                      alt="Profile"
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                  </Grid>
                  <Grid size={{ xs: 8, md: 10 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography
                      fontWeight={600}
                      fontSize={{ xs: 14, sm: 18, md: 20, lg: 24 }}
                      color="#515151"
                      lineHeight={1}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      fontSize={{ xs: 10, sm: 12, md: 14, lg: 16 }}
                      color="#8893B0"
                      sx={{ mt: { xs: 2, sm: 1, md: 1, lg: 0.5 } }}
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid> 
           <Grid container 
            size={{ xs: 12, md: 12 }}
            alignItems="center"
            sx={{
              p: "25px 30px",
              border: "1px solid #D8D8D8",
              borderBottom: "1px solid #E1E1E1",
              borderRadius: "5px 5px 0 0",
            }}
          >
            <Grid 
              size={{ xs: 4, md: 2 }}
              sx={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", cursor: "pointer" }}
            >
              <Image
                src={assets.info_icon}
                alt="info icon"
                width={22}
                style={{ borderRadius: "50%", height: "auto" }}
              />
            </Grid>

            <Grid size={{ xs: 8, md: 10 }}>
              <Typography
                fontWeight={600}
                fontSize={{ xs: 14, sm: 16, md: 17, lg: 18 }}
                color="#323232"
              >
                Latest Appointment
              </Typography>
            </Grid>
          </Grid> 
           <Grid container 
              size={{ xs: 12, md: 12 }}
              sx={{
                border: "1px solid #D8D8D8",
                borderTop: 0,
                borderRadius: "0px 0px 5px 5px",
              }}
            >
              <Grid container 
                size={{ xs: 12, md: 12 }} 
                sx={{ p: "35px 30px" }}
              >
                <Grid 
                  size={{ xs: 4, md: 2 }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={assets.profile_pic}
                    alt="Profile Picture"
                    width={52}
                    height={52}
                    style={{ borderRadius: "50%", height: "auto" }}
                  />
                </Grid>

                <Grid 
                  size={{ xs: 8, md: 10 }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    fontWeight={600}
                    fontSize={{ xs: 12, sm: 14, md: 16, lg: 18 }}
                    color="#262626"
                  >
                    Dr. Richard James
                  </Typography>
                  <Typography
                    color="#696B80"
                    mt="2px"
                    fontSize={{ xs: 10, sm: 12, md: 14, lg: 16 }}
                  >
                    Booking on 24th July, 2024
                  </Typography>
                </Grid>
              </Grid>
           </Grid>
        </Grid>
      </Grid> 
    </Grid>
  );
};

export default DashboardPage;
