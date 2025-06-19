import { ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState, useRef } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ModalNewVisita } from "../Modals/modalNewVisita";
import { ModalNewEmail } from "../Modals/modalNewEmail";
import { ModalCadastros } from "../Modals/modalCadastros";
import { ModalConfigs } from "../Modals/modalConfigs";

import { Modal, Tooltip } from "@mui/material";
import ErrorAlert from "../Alerts/errorAlert";
import ImageButtonComponent from "../Buttons/imageButton";



const logoipsum = "../src/assets/logoipsum-354.svg"


const SidebarContext = createContext();

export default function NavigationSideBarComponent({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState(0);
  const [expandedItem, setExpandedItem] = useState();

  // Modal das visitas
  const [modalVisita, setOpenModalVisita] = useState(false);
  const handleOpenVisitaModal = () => setOpenModalVisita(true);
  const handleCloseVisitaModal = () => setOpenModalVisita(false);

  // Modal dos emails
  const [modalEmail, setOpenModalEmail] = useState(false);
  const handleOpenEmailModal = () => setOpenModalEmail(true);
  const handleCloseEmailModal = () => setOpenModalEmail(false);

  //Modal dos cadastros
  const [modalCadastros, setOpenModalCadastro] = useState(false);
  const handleOpenCadastrosModal = () => setOpenModalCadastro(true);
  const handleCloseCadastrosModal = () => setOpenModalCadastro(false);

  //Modal das configurações
  const [modalConfigs, setOpenModalConfigs] = useState(false)
  const handleOpenConfigsModal = () => setOpenModalConfigs(true);
  const handleCloseConfigsModal = () => setOpenModalConfigs(false);


  // Alert escala
  const [alerts, setAlerts] = useState([]);          // array de { id, message }
  let nextId = useRef(0);                            // para gerar IDs únicos

  const handleOpenAlert = (message) => {
    const id = nextId.current++;
    setAlerts((prev) => [...prev, { id, message }]);
  };

  const handleCloseAlert = (id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <Box className="h-screen">
      <nav
        className={`h-[100%] transition-all ${expanded ? "w-80" : "w-22"
          } opacity-100 flex flex-col rounded-tr-lg rounded-br-lg bg-white drop-shadow-lg gap-5`}
      >
        <div className="p-4 pb-2 flex justify-between items-center border-b border-gray-300">
          <img
            src={logoipsum}
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
              }`}
            alt=""
          />
          <Tooltip
            title={"Retrair / Expandir coluna"}
            placement="right">
            <Button
              sx={{
                color: 'black'
              }}
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all color-black"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </Button>
          </Tooltip>
        </div>

        <SidebarContext.Provider
          value={{
            setActiveItem,
            setExpandedItem,
            expanded,
            handleOpenVisitaModal,
            handleOpenEmailModal,
            handleOpenCadastrosModal,
            handleOpenConfigsModal,
            handleOpenAlert,
          }}
        >
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* Informações do usuário */}
        <div className={`border-t border-gray-300 flex justify-around flex p-3`}>
          <div className={`${expanded ? "ml-0" : "ml-1"}`}>
            <ImageButtonComponent />
          </div>
          <div
            className={`flex items-center overflow-hidden transition-all ${expanded ? "w-52" : "w-0"
              }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-[#002039]">Gustavo Silva</h4>
              <span className="text-xs text-gray-600">gustavo.silva@libertyti.com.br</span>
            </div>
          </div>
        </div>
      </nav>

      <ModalNewEmail openModal={modalEmail} closeModal={handleCloseEmailModal} />
      <ModalNewVisita openModal={modalVisita} closeModal={handleCloseVisitaModal} />
      <ModalCadastros openModal={modalCadastros} closeModal={handleCloseCadastrosModal} />
      <ModalConfigs openModal={modalConfigs} closeModal={handleCloseConfigsModal} />

      {alerts.map(({ id, message }) => (
        <ErrorAlert
          key={id}
          openAlert={true}
          closeAlert={() => handleCloseAlert(id)}
          message={message}
        />
      ))}
    </Box>
  );
}

export function NavigationSideBarItem({ icon, text, index, hoverText, children }) {
  const {
    expanded,
    activeItem,
    setActiveItem,
    expandedItem,
    setExpandedItem,
    handleOpenVisitaModal,
    handleOpenEmailModal,
    handleOpenCadastrosModal,
    handleOpenConfigsModal,
    handleOpenAlert
  } = useContext(SidebarContext);

  return (
    <Button
      sx={{
        color: 'black'
      }}
      onClick={() => {
        setActiveItem(index), setExpandedItem(index);
        switch (index) {
          case 0:
            handleOpenAlert("Caro usuário, você já está na aba da Escala!");
            break;
          case 1:
            handleOpenVisitaModal(); // Chama a função para abrir o modal dos visita apenas quando index for 1
            break;
          case 2:
            handleOpenEmailModal(); // Chama a função para abrir o modal dos emails apenas quando index for 2
            break;
          case 3:
            handleOpenCadastrosModal(); // Chama a função para abrir o modal das cadastros apenas quando index for 3
            break;
          case 4:
            handleOpenConfigsModal(); // Chama a função para abrir o modal de configurações apenas quando index for 4
            break;
          case 5:
            handleOpenVisitaModal(); // Chama a função para abrir o modal de ajuda apenas quando index for 5
            break;
        }
        {
          console.log(`Index ${activeItem}`)
        }
      }}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md 
        transition-colors group h-12
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-60 ml-3" : "w-0"
          }`}
      >
        {expanded ? text : ""}
      </span>
      {!expanded && (
        <span
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6 w-30
          bg-green-100 text-green-800 text-md
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          flex justify-center
      `}
        >
          {hoverText}
        </span>
      )}
    </Button>
  );
}