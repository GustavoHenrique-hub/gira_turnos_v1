import React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import ParticlesModelOne from "../../components/particles/particlesModelOne/particlesModelOne";

function Home() {
  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
      {/* Particles como background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
      </Box>

      {/* Conteúdo principal por cima */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "rgba(37, 205, 159, 0.7)", // Cor do conteúdo principal com transparência
        }}
      >
        <TextField
          label="Digite algo"
          variant="outlined"
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        />
      </Box>
    </Box>
  );
}

export default Home;
