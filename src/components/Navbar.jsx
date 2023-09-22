import styled from "@emotion/styled";
import { Pets } from "@mui/icons-material";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%",
  height: "30px",
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  height: "20px",
  width: "20px",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
