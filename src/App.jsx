import React from "react";

import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCekxzWmFZfVtgfV9EY1ZUQmYuP1ZhSXxWdkZhUH9XcndQQGVaWEB9XUs="
);

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
import ScheduleDataComponent from "./components/scheduleComponent/scheduleComponent.jsx";
import NavigationSideBarComponent, {
  NavigationSideBarItem,
} from "./components/sideBarComponent/sideBarComponent.jsx";

//Ícones
import {
  CalendarCheck,
  BarChart3,
  CirclePlus,
  MailPlus,
  Settings,
  LifeBuoy,
} from "lucide-react";

const BackGroundImage =
  "https://imagem-data-base.vercel.app/background_liberty_3d.png";

// Configuração principal com as rotas
export default function App() {
  return (
    <Router>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${BackGroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          display: "flex",
          gap: "7.5%",
          alignItems: "center",
        }}
      >
        <NavigationSideBarComponent>
          <NavigationSideBarItem
            icon={<CalendarCheck size={20} />}
            text="Escala Técnicos"
            hoverText="Escala"
            index={0} 
          />
          <NavigationSideBarItem
            icon={<MailPlus size={20} />}
            text="Envio de e-mail"
            hoverText="E-mails"
            index={1} 
          />
          <NavigationSideBarItem
            icon={<CirclePlus size={20} />}
            text="Cadastros"
            hoverText="Cadastros"
            index={2} 
          />
          <hr className="my-3" />
          <NavigationSideBarItem
            icon={<Settings size={20} />}
            text="Configurações"
            hoverText="Configurações"
            index={6} 
          />
          <NavigationSideBarItem
            icon={<LifeBuoy size={20} />}
            text="Ajuda"
            hoverText="Ajuda"
            index={7} 
          />
        </NavigationSideBarComponent>
        <ScheduleDataComponent />
      </Box>
    </Router>
  );
}
