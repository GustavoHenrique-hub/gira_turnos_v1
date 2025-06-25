import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AutocompleteTecnico, { AutocompleteTurno, AutocompleteUnidade, AutocompleteLocalizacao } from '../AutoCompletes/autoCompleteNewVisita';
import { X } from 'lucide-react';

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

import SubmitButton from '../Buttons/submitButton'
import BackButton from '../Buttons/backButton';
import SearchButton from '../Buttons/searchButton';

import TableAddVisitas from '../DataTable/dataTable';

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
        width: '75%',
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

          <Button sx={{ color: 'black' }} className='h-[40%] gap-2' variant='outlined' onClick={closeModal}>
            <X size={20} color='black' /> <span>Fechar</span>
          </Button>
        </Box>

        {/* Body content */}
        <Box className='flex flex-col w-[100%] h-[100%]'>
          {/* Header Body content */}
          <Box className='flex flex-col w-[100%] h-[100%] gap-5'>
            {/* Left Body content */}

            <Box className='flex flex-col w-[100%] h-[100%] gap-5'>
              <Box className='flex flex-row w-[100%] gap-3'>
                <AutocompleteTecnico />
                <AutocompleteUnidade />
              </Box>
              <Box className='flex flex-row w-[100%] gap-3'>
                <AutocompleteTurno />
                <AutocompleteLocalizacao />
              </Box>
              <Box className='flex flex-row w-[100%] gap-3'>
                <BackButton onClick={closeModal}
                  className='w-48'
                  startIcon={<AddIcon />}
                  variant="outlined"
                >
                  Adicionar a Lista
                </BackButton>
                <SubmitButton onClick={closeModal}
                  className='w-48'
                  startIcon={<SendIcon />}
                  variant="outlined"
                >
                  Lançar visita
                </SubmitButton>
                <SearchButton onClick={closeModal}
                  className='w-45'
                  startIcon={<SaveOutlinedIcon />}
                  variant="outlined"
                >
                  Gravar
                </SearchButton>
              </Box>
            </Box>
          </Box>

          {/* Middle Body content */}
          <Box className='flex flex-row gap-10 w-[100%] h-[50%] items-center'>
            {/* Left Body content */}
            <Box className='flex flex-col w-[50%] h-[50%] gap-5'>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Left
              </Typography>
              <TableAddVisitas />
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


