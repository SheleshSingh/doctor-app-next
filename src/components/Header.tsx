"use client";
import { assets } from "@/assets/assets";
import { headerLinks } from "@/mockData";
import { Button, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Profile from "./Profile";

const Header = () => {
  const pathname = usePathname();
//   const [showMenu, setShowMenu] = useState<boolean>(false);
  const [token, setToken] = useState<boolean>(true);
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        padding={2}
      >
        <Grid>
          <Image src={assets.logo} alt="Logo" width={200} height={200} />
        </Grid>
        <Grid container gap={3} alignItems="center" justifyContent="center">
          {headerLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link key={link.title} href={link.path}>
                <Typography
                  fontSize={20}
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
        <Grid container alignItems="center" justifyContent="center">
          {token ? (
            <Profile setToken={setToken} />
          ) : (
            <Link href="/login">
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
            </Link>
          )}
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default Header;
