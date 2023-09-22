import { Box } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React from "react";

const Sidebar = () => {
  return (
    <Box
     bgcolor="lightcoral" 
     flex={1}
     sx={{
        display: {
            xs: "none",
            sm: "block",
        }
     }}
     p={1}
     >
      <h3>sidebar</h3>
    </Box>
  );
};

export default Sidebar;
