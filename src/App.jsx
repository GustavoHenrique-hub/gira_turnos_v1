import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate, // Importa para redirecionamentos
} from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";

import Home from "./pages/home/home";
import Tecnicos from "./pages/tecnicos/tecnicos";
import Unidade from "./pages/unidade/unidade";
import ParticlesModelOne from "./components/particles/particlesModelOne/particlesModelOne";

// Componente de navegação
function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate(); // Hook do React Router para navegação

  // Mapeia os índices do BottomNavigation para rotas específicas
  const handleNavigation = (newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate("/home");
    if (newValue === 1) navigate("/tecnicos");
    if (newValue === 2) navigate("/unidade");
  };

  return (
    <Box sx={{ width: "40%", position: "fixed", bottom: 20 }}>
      <BottomNavigation
        sx={{ backgroundColor: "#fff", borderRadius: 3, boxShadow: 4 }}
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
      >
        <BottomNavigationAction
          sx={{ color: "#25CD9F" }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "#25CD9F" }}
          label="Técnicos"
          icon={<GroupIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "#25CD9F" }}
          label="Unidade"
          icon={<BusinessIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

// Configuração principal com as rotas
export default function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {/* Padding para evitar sobreposição com o BottomNavigation */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Rota padrão */}
          <Route path="/home" element={<Home />} />
          <Route path="/tecnicos" element={<Tecnicos />} />
          <Route path="/unidade" element={<Unidade />} />
          <Route path="*" element={<Navigate to="/home" />} /> {/* Rota 404 */}
        </Routes>
        <SimpleBottomNavigation />
        <ParticlesModelOne />
      </Box>
    </Router>
  );
}
