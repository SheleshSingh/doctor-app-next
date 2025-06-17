import { assets } from "@/assets/assets";
import { menuItem } from "@/mockData";
import { Grid, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Profile = ({ setToken }: { setToken: (token: boolean) => void }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };
 
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      gap={1}
      sx={{ cursor: "pointer", position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={assets.profile_pic}
        alt="Profile Picture"
        width={50}
        style={{ borderRadius: "50%", height: "auto" }}
      />
      <Image
        src={assets.dropdown_icon}
        alt="Dropdown Icon"
        width={10}
        style={{ height: "auto" }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
        PaperProps={{
          sx: { minWidth: 180 },
        }}
        sx={{ marginTop: 2.5 }}
      >
        {menuItem.map((item) => (
          <Link href={item.path} key={item.title}>
            <MenuItem
              onClick={() => {
                handleMouseLeave();
                if (item.title === "Logout") {
                  setToken(false);
                }
              }}
            >
              {item.title}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Grid>
  );
};
export default Profile;
