import React from "react";

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense("Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCekxzWmFZfVtgfV9EY1ZUQmYuP1ZhSXxWdkZhUH9XcndQQGVaWEB9XUs=");

// Estilos do Syncfusion
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-lists/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-react-schedule/styles/material.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";

import BottomNavigationComponent from "./components/bottomNavigationComponent/bottomNavigationComponent.jsx";
import ScheduleDataComponent from "./components/scheduleComponent/scheduleComponent.jsx";
import NavigationSideBarComponent from "./components/sideBarComponent/sideBarComponent.jsx";

const BackGroundImage = "https://imagem-data-base.vercel.app/background_liberty_3d.png";



// Configuração principal com as rotas
export default function App() {
  return (
    <Router>
      <Box
        sx={{
          width: "99vw",
          height: "97vh",
          backgroundImage: `url(${BackGroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <NavigationSideBarComponent />
        <ScheduleDataComponent />
      </Box>
    </Router>
  );
}
