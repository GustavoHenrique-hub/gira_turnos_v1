import React from "react";

import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdmWXtfcHVVRGNZWU12V0JWYUA="
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
import ScheduleDataComponent from "./components/ScheduleComponent/scheduleComponent.jsx";
import NavigationSideBarComponent, {
  NavigationSideBarItem,
} from "./components/SideBarComponent/sideBarComponent.jsx";

//Ícones
import {
  CalendarCheck,
  CalendarPlus2,
  CirclePlus,
  MailPlus,
  Settings,
  LifeBuoy,
} from "lucide-react";

const BackGroundImage =
  "https://imagem-data-base.vercel.app/background_liberty_3d.png";

const handleTestOnConsole = () => {
  console.log("CLICADO")
}

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
          alignItems: "center",
          position: "relative", // Definir um container para o lado fixo
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
            hoverText="Configs."
            index={3}
          />
          <NavigationSideBarItem
            icon={<LifeBuoy size={20} />}
            text="Ajuda"
            hoverText="Ajuda"
            index={4}
          />
        </NavigationSideBarComponent>
        <Box
          sx={{
            position: "absolute", // O componente de agenda fica fixo na tela
            top: "5%",
            left: "20%", // Ajusta conforme a largura da barra lateral
            width: "80%", // Define a largura do agendamento
            height: "100%", // A altura deve ocupar toda a tela
            overflow: "auto", // Para que o conteúdo da agenda role se necessário
          }}
        >
          <ScheduleDataComponent />
        </Box>
      </Box>
    </Router>
  );
}