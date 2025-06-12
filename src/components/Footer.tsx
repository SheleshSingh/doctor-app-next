import { assets } from "@/assets/assets";
import { footerLinks } from "@/mockData";
import { Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid size={{ xs: 12, md: 12 }} container justifyContent="center" mt={5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Image
            src={assets.logo}
            alt=""
            width={150}
            style={{ height: "auto" }}
          />
          <Typography mt={2} fontSize={16} color="#4B5563">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 3 }}
          container
          alignContent="center"
          direction="column"
          spacing={2}
        >
          <Typography fontSize={18} fontWeight={500}>
            COMPANY
          </Typography>

          {footerLinks.map((item) => (
            <Typography key={item.title} fontSize={16} color="#4B5563">
              {item.title}
            </Typography>
          ))}
        </Grid>
        <Grid
          size={{ xs: 12, md: 3 }}
          container
          alignContent="center"
          direction="column"
          spacing={2}
        >
          <Typography fontSize={18} fontWeight={500}>
            GET IN TOUCH
          </Typography>
          <Typography fontSize={16} color="#4B5563">
            +918923993320
          </Typography>
          <Typography fontSize={16} color="#4B5563">
            sheleshsingh755@gmail.com
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: 5 }} />
      <Typography fontSize={16} color="#4B5563" textAlign="center" mt={5}>
        © 2023 Doctor App. All rights reserved.
      </Typography>
    </>
  );
};

export default Footer;
