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
import React, { useState } from "react";
import Profile from "./Profile";

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
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

        {!isMobile && (
          <Grid>
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
        )}

        {isMobile && (
          <Image
            src={assets.menu_icon}
            alt="menu"
            style={{ width: 24, height: "auto", cursor: "pointer" }}
            onClick={() => setShowMenu(true)}
          />
        )}
      </Grid>

      {isMobile && showMenu && (
        <Grid
          container
          direction="column"
          bgcolor="#fff"
          position="fixed"
          top={0}
          left={0}
          height="100vh"
          width="75vw"
          zIndex={1500}
          p={2}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Image
              src={assets.logo}
              alt="Logo"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <Image
              src={assets.cross_icon}
              alt="Close"
              style={{ width: 24, height: "auto", cursor: "pointer" }}
              onClick={() => setShowMenu(false)}
            />
          </Grid>

          {headerLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setShowMenu(false)}
            >
              <Typography sx={{ py: 1.5, fontSize: 18, fontWeight: 500 }}>
                {link.title}
              </Typography>
            </Link>
          ))}

          {!token && (
            <Link href="/login">
              <Button
                fullWidth
                sx={{
                  mt: 4,
                  backgroundColor: "#5F6FFF",
                  borderRadius: 2,
                  color: "#fff",
                  padding: "10px",
                }}
              >
                Create account
              </Button>
            </Link>
          )}
        </Grid>
      )}

      <Divider />
    </>
  );
};

export default Header;
