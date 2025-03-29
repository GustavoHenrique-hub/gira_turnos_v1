import React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

function Home() {
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

export default Home;
