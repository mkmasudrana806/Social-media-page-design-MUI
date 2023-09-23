import styled from "@emotion/styled";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideocamRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: 30 },
        }}
      >
        <Fab size="small" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={300} bgcolor={"white"} borderRadius={4} p={2}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={"center"}
            fontWeight={400}
            sx={{ mb: 2 }}
          >
            Create Post{" "}
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://img.freepik.com/free-photo/charming-little-boy-long-green-red-hat-lies-fluffy-carpet_8353-305.jpg?size=626&ext=jpg&ga=GA1.1.2062258379.1695436079&semt=ais"
            />
            <Typography>Masud Rana</Typography>
          </UserBox>
          <Box>
            <div>
              <TextField
                sx={{ width: "100%" }}
                id="standard-multiline-static"
                multiline
                placeholder="What's on your mind?"
                rows={3}
                variant="standard"
              />
            </div>
          </Box>
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="primary" />
            <VideocamRounded color="primary" />
            <PersonAdd color="primary" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
