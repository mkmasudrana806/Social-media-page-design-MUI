import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
      p={1}
    >
      <Box position={"fixed"}>
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Remy Sharp"
            src="https://img.freepik.com/free-photo/cute-little-boy-red-striped-hat-sits-floor_1304-4935.jpg?size=626&ext=jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/shot-cute-baby-girl-looking-camera_329181-19580.jpg?size=626&ext=jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://img.freepik.com/premium-photo/cute-baby_948735-18601.jpg?size=626&ext=jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://img.freepik.com/free-photo/child-dressed-like-elf-lies-fluffy-carpet_1304-4806.jpg?size=626&ext=jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://img.freepik.com/premium-photo/cute-baby_948735-13673.jpg?size=626&ext=jpg&ga=GA1.2.2062258379.1695436079&semt=ais"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://img.freepik.com/free-photo/happy-funny-girl-twins-sisters-playing-laughing_155003-2791.jpg?size=626&ext=jpg&ga=GA1.2.2062258379.1695436079&semt=ais"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://img.freepik.com/free-photo/tenderness-boy-with-flowers-sitting-bed_8353-819.jpg?size=626&ext=jpg&ga=GA1.2.2062258379.1695436079&semt=ais"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://img.freepik.com/free-photo/portrait-happy-kids_144627-39193.jpg?size=626&ext=jpg"
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default Rightbar;
