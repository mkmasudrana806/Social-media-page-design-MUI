import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      bgcolor="indigo"
      flex={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
      p={1}
    >
      <h3>right bar</h3>
    </Box>
  );
};

export default Rightbar;
