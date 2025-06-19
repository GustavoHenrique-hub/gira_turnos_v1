import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AutocompleteTecnico, { AutocompleteTurno, AutocompleteUnidade, AutocompleteLocalizacao } from '../AutoCompletes/autoCompleteNewVisita';
import { X } from 'lucide-react';

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import SubmitButton from '../Buttons/submitButton'

export function ModalNewVisita({ openModal, closeModal }) {
  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '80%',
        bgcolor: 'background.paper',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
      }}>
        {/* Header do Modal */}
        <Box className='flex justify-between h-20 w-[100%]'>
          <Typography variant="h6" id="modal-modal-title">
            VISITA MODAL
          </Typography>

          <Button sx={{ color: 'black' }} className='h-[40%] gap-2' onClick={closeModal}>
            <X size={20} color='black' /> <span>Fechar</span>
          </Button>
        </Box>

        {/* Body content */}
        <Box className='w-[100%] h-[100%]'>
          {/* Header Body content */}
          <Box className='flex flex-row w-[100%] h-[50%] gap-10'>
            {/* Left Body content */}
            <Box className='flex flex-row w-[50%] h-[50%] gap-5'>
              <Box className='flex flex-col w-[50%] h-[50%] gap-5'>
                <AutocompleteTecnico />
                <AutocompleteUnidade />
                <SubmitButton onClick={closeModal}
                  sx={{ mt: 2 }}
                  startIcon={<SaveOutlinedIcon />}
                  variant="outlined"
                >
                  Enviar
                </SubmitButton>
              </Box>
              <Box className='flex flex-col w-[50%] h-[50%] gap-5'>
                <AutocompleteTurno />
                <AutocompleteLocalizacao />
              </Box>
            </Box>

            {/* Right Body content */}
            <Box className='flex flex-col w-[50%] h-[50%]'>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Right
              </Typography>
            </Box>
          </Box>

          {/* Middle Body content */}
          <Box className='flex flex-row gap-10 w-[100%] h-[50%] items-center'>
            {/* Left Body content */}
            <Box className='flex flex-col w-[50%] h-[50%] gap-5'>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Left
              </Typography>
            </Box>

            {/* Right Body content */}
            <Box className='flex flex-col w-[50%] h-[50%]'>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Right
              </Typography>

            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}


