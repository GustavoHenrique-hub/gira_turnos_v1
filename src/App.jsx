import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import {
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  Box,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Face6Icon from "@mui/icons-material/Face6";
import BusinessIcon from "@mui/icons-material/Business";
import GroupIcon from "@mui/icons-material/Group";
import CardOfDays from "./components/cards/cardOfDays/cardOfDays";

const BackGroundImage =
  "https://imagem-data-base.vercel.app/background_liberty_3d.png";

// Componente de navegação
function SimpleBottomNavigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseCadastrosMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: "40%", position: "fixed", bottom: 20 }}>
      <BottomNavigation
        sx={{ backgroundColor: "#fff", borderRadius: 3, boxShadow: 4 }}
        showLabels
      >
        <BottomNavigationAction
          sx={{ color: "#25CD9F" }}
          label="Agenda"
          icon={<CalendarMonthIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "#25CD9F" }}
          label="Email"
          icon={<SendIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "#25CD9F" }}
          label="Cadastros"
          icon={<AddCircleOutlineIcon />}
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseCadastrosMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          sx={{
            marginBottom: "50px", // Ajusta para ficar mais acima
          }}
        >
          <MenuItem onClick={handleCloseCadastrosMenu}>
            <ListItemIcon>
              <Face6Icon />
            </ListItemIcon>
            <Typography variant="inherit">Técnico</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseCadastrosMenu}>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <Typography variant="inherit">Unidade</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseCadastrosMenu}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <Typography variant="inherit">Ponto Focal</Typography>
          </MenuItem>
        </Menu>
      </BottomNavigation>
    </Box>
  );
}

const arrayOfDays = [
  {
    id: 1,
    nome: "Segunda",
  },
  {
    id: 2,
    nome: "Segunda",
  },
  {
    id: 3,
    nome: "Segunda",
  },
  {
    id: 4,
    nome: "Segunda",
  },
  {
    id: 5,
    nome: "Segunda",
  },
  {
    id: 6,
    nome: "Segunda",
  },
  {
    id: 7,
    nome: "Segunda",
  },
  {
    id: 8,
    nome: "Segunda",
  },
  {
    id: 9,
    nome: "Segunda",
  },
  {
    id: 10,
    nome: "Segunda",
  },
  {
    id: 11,
    nome: "Segunda",
  },
  {
    id: 12,
    nome: "Segunda",
  },
  {
    id: 13,
    nome: "Segunda",
  },
  {
    id: 14,
    nome: "Segunda",
  },
  {
    id: 15,
    nome: "Segunda",
  },
  {
    id: 16,
    nome: "Segunda",
  },
  {
    id: 17,
    nome: "Segunda",
  },
  {
    id: 18,
    nome: "Segunda",
  },
  {
    id: 19,
    nome: "Segunda",
  },
  {
    id: 20,
    nome: "Segunda",
  },
  {
    id: 21,
    nome: "Segunda",
  },
  {
    id: 22,
    nome: "Segunda",
  },
  {
    id: 23,
    nome: "Segunda",
  },
  {
    id: 24,
    nome: "Segunda",
  },
  {
    id: 25,
    nome: "Segunda",
  },
  {
    id: 26,
    nome: "Segunda",
  },
  {
    id: 27,
    nome: "Segunda",
  },
  {
    id: 28,
    nome: "Segunda",
  },
  {
    id: 29,
    nome: "Segunda",
  },
  {
    id: 30,
    nome: "Segunda",
  },
];

// Configuração principal com as rotas
export default function App() {
  return (
    <Router>
      <Box
        sx={{
          width: "99vw",
          height: "97vh",
          backgroundImage: `url(${BackGroundImage})`, // Definindo a imagem de fundo corretamente
          backgroundSize: "cover", // Garante que a imagem cubra toda a tela
          backgroundPosition: "center", // Centraliza a imagem
          backgroundRepeat: "no-repeat", // Evita repetição da imagem
        }}
      >
        {/* Padding para evitar sobreposição com o BottomNavigation */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)", // Ajusta as colunas dinamicamente
            gridTemplateRows: "repeat(5, 1fr)", // Define 4 linhas
            width: "100%",
            height: "90%",
          }}
        >
          {arrayOfDays.map((item, index) => (
            <CardOfDays key={item.id} diaDoMes={item.id} diaDaSemana={item.nome} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SimpleBottomNavigation />
        </Box>
      </Box>
    </Router>
    
  );
}
