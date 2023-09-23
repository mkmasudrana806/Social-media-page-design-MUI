import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  __emotion_styles: {
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
}));
