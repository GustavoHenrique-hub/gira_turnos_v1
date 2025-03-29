import React, { useState } from "react";

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


// Componente de navegação
export default function BottomNavigationComponent() {
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