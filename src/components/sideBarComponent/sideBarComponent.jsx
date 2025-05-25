import { ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState, useRef } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ModalNewVisita } from "../Modals/modalNewVisita";
import { ModalNewEmail } from "../Modals/modalNewEmail";
import { ModalCadastros } from "../Modals/modalCadastros";
import { ModalConfigs } from "../Modals/modalConfigs";

import { Tooltip } from "@mui/material";
import ErrorAlert from "../Alerts/errorAlert";



const logoipsum = "../src/assets/logoipsum-354.svg"


const SidebarContext = createContext();

export default function NavigationSideBarComponent({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState(0);
  const [expandedItem, setExpandedItem] = useState();

  // Modal das visitas
  const [modalVisita, setOpenModalVisita] = useState(false);
  const handleOpenModal = () => setOpenModalVisita(true);
  const handleCloseModal = () => setOpenModalVisita(false);

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
            handleOpenModal,
            handleOpenEmailModal,

            handleOpenAlert,
          }}
        >
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* Informações do usuário */}
        <div className="border-t border-gray-300 flex p-3">
          <img
            src="https://ui-avatars.com/api/?name=Gustavo+Silva&background=B8FF98&color=002039&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
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
  const { expanded, activeItem, setActiveItem, expandedItem, setExpandedItem, handleOpenModal, handleOpenEmailModal, handleOpenAlert } =
    useContext(SidebarContext);

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
            handleOpenEmailModal(); // Chama a função para abrir o modal dos emails apenas quando index for 1
            break;
          case 2:
            handleOpenEmailModal(); // Chama a função para abrir o modal dos cadastros apenas quando index for 2
            break;
          case 3:
            handleOpenEmailModal(); // Chama a função para abrir o modal das configurações apenas quando index for 3
            break;
          case 4:
            handleOpenEmailModal(); // Chama a função para abrir o modal de ajuda apenas quando index for 4
            break;
          case 5:
            handleOpenEmailModal(); // Chama a função para abrir o modal de ajuda apenas quando index for 5
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