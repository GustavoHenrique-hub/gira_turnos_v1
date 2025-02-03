import { Box, TextField } from "@mui/material";
import React from "react";
import CardOfDays from "../../components/cards/cardOfDays/cardOfDays";

export default function Tecnicos() {
  return (
    <Box
      sx={{
        height: "1000px",
        width: "100%",
        overflow: "scroll",
        backgroundColor: "#25CD9F",
        padding: 2,
        
      }}
    >
      <CardOfDays />
    </Box>
  );
}
