import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Tooltip } from "@mui/material";


const SidebarContext = createContext();

export default function NavigationSideBarComponent({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState(0);
  const [expandedItem, setExpandedItem] = useState();

  const [openModal, setOpenModal] = useState(false); // Estado para controlar o modal

  // Função para abrir o Modal
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box className="h-screen">
      <nav
        className={`h-[100%] transition-all ${expanded ? "w-80" : "w-22"
          } opacity-100 flex flex-col rounded-tr-lg rounded-br-lg bg-white drop-shadow-lg gap-5`}
      >
        <div className="p-4 pb-2 flex justify-between items-center border-b border-gray-300">
          <img
            src="https://img.logoipsum.com/354.svg"
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
            expanded,
            activeItem,
            setActiveItem,
            expandedItem,
            setExpandedItem,
            handleOpenModal
          }}
        >
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* Informações do usuário */}
        <div className="border-t border-gray-300 flex p-3">
          <Button
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
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ width: 400, padding: 2, backgroundColor: 'white', borderRadius: 2 }}>
          <Typography variant="h6" id="modal-modal-title">
            Modal Title
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is the content inside the modal.
          </Typography>
          <Button onClick={handleCloseModal}>Fechar</Button>
        </Box>
      </Modal>
    </Box>
  );
}

export function NavigationSideBarItem({ icon, text, index, hoverText, children }) {
  const { expanded, activeItem, setActiveItem, expandedItem, setExpandedItem, handleOpenModal } =
    useContext(SidebarContext);

  return (
    <Button
      sx={{
        color: 'black'
      }}
      onClick={() => {
        setActiveItem(index), setExpandedItem(index);
        if (index !== 0) {
          handleOpenModal(); // Chama a função para abrir o modal apenas quando index não for 0
        } else {
          console.log(`Index ${activeItem}`)
        }
      }}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
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