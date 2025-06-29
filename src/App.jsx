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
import ScheduleDataComponent from "../src/components/scheduleComponent/scheduleComponent.jsx";
import NavigationSideBarComponent, { NavigationSideBarItem } from "../src/components/SideBarComponent/sideBarComponent.jsx";

//Ícones
import {
  CalendarCheck,
  CirclePlus,
  MailPlus,
  Settings,
  LifeBuoy,
  CalendarPlus2,
} from "lucide-react";

const BackGroundImage =
  "https://imagem-data-base.vercel.app/background_liberty_3d.png";

const handleTestOnConsole = () => {
  console.log("CLICADO")
}


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
            icon={<CalendarCheck size={30} />}
            text="Escala Técnicos"
            hoverText="Escala"
            index={0}
          />
          <NavigationSideBarItem
            icon={<CalendarPlus2 size={30}/>}
            text="Nova Visita"
            hoverText="Nova Visita"
            index={1}
          />
          <NavigationSideBarItem
            icon={<MailPlus size={30} />}
            text="Envio de e-mail"
            hoverText="E-mails"
            index={2}
          />
          <NavigationSideBarItem
            icon={<CirclePlus size={30} />}
            text="Cadastros"
            hoverText="Cadastros"
            index={3}
          />
          <hr className="my-3" />
          <NavigationSideBarItem
            icon={<Settings size={30} />}
            text="Configurações"
            hoverText="Configs."
            index={4}
          />
          <NavigationSideBarItem
            icon={<LifeBuoy size={30} />}
            text="Ajuda"
            hoverText="Ajuda"
            index={5}
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