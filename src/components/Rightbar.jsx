import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  const itemData = [
    {
      img: "https://img.freepik.com/free-photo/cute-blue-eyed-baby-months-smiling-home-bed_496169-797.jpg?size=626&ext=jpg&ga=GA1.2.2062258379.1695436079&semt=ais",
    },
    {
      img: "https://img.freepik.com/free-photo/littlle-girl-mint-dress-sits-before-white-christmas-tree_8353-947.jpg?size=626&ext=jpg&ga=GA1.2.2062258379.1695436079&semt=ais",
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-adorable-newborn-baby-beach_23-2150763264.jpg?size=626&ext=jpg&ga=GA1.2.2062258379.1695436079&semt=ais",
    },
    {
      img: "https://img.freepik.com/free-photo/blonde-boy-holding-toy-looking-up_1304-4093.jpg?size=626&ext=jpg&ga=GA1.2.2062258379.1695436079&semt=ais",
    },
    {
      img: "https://img.freepik.com/free-photo/pretty-little-child-sits-chair-before-christmas-tree_8353-941.jpg?size=626&ext=jpg&ga=GA1.2.2062258379.1695436079&semt=ais",
    },
    {
      img: "https://img.freepik.com/free-photo/cute-little-girl-sitting-eating-candy_1157-32500.jpg?size=626&ext=jpg&ga=GA1.2.2062258379.1695436079&semt=ais",
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-adorable-newborn-baby_23-2150763258.jpg?size=626&ext=jpg&ga=GA1.2.2062258379.1695436079&semt=ais",
    },
    {
      img: "https://img.freepik.com/premium-photo/baby-with-blue-eyes-black-shirt-with-white-robot-front_956664-496.jpg?size=626&ext=jpg&ga=GA1.1.2062258379.1695436079&semt=ais",
    },
  ];
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
      <Box position={" "}>
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
        <Typography marginBottom={2} marginTop={2}>
          Latest Photos
        </Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography marginBottom={2} marginTop={2}>
          Latest Users
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
