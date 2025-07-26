"use client";

import { assets } from "@/assets/assets";
import { headerLinks } from "@/mockData";
import {
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react"; 

const DashboardHeader = () => {
  const pathname = usePathname(); 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        padding={2}
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          zIndex: 1000,
        }}
      >
        <Grid>
          <Link href="/">
            <Image
              src={assets.logo}
              alt="Logo"
              width={120}
              style={{ height: "auto" }}
            />
          </Link>
          <Button
                  sx={{
                    backgroundColor: "#5F6FFF",
                    borderRadius: 5,
                    color: "#fff",
                    padding: "10px 20px",
                  }}
                >
                  Create account
                </Button>
        </Grid>

        {!isMobile && (
          <Grid>
            <Grid container gap={3} alignItems="center" justifyContent="center">
              {headerLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link key={link.title} href={link.path}>
                    <Typography
                      fontSize={16}
                      fontWeight={600}
                      color={isActive ? "#5F6FFF" : "inherit"}
                      sx={{
                        textDecoration: isActive ? "underline" : "none",
                        textUnderlineOffset: isActive ? "8px" : "none",
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Link>
                );
              })}
            </Grid>
          </Grid>
        )}

         
 
      </Grid>
 

      <Divider />
    </>
  );
};

export default DashboardHeader;
