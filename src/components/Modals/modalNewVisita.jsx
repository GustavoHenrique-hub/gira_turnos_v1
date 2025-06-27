import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AutocompleteTecnico, { AutocompleteTurno, AutocompleteUnidade, AutocompleteLocalizacao } from '../AutoCompletes/autoCompleteNewVisita';
import DateTimeTextField from '../TextField/dateTime.jsx'
import { X } from 'lucide-react';

import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

import SubmitButton from '../Buttons/submitButton'
import BackButton from '../Buttons/backButton';

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
        inset: '5% 12.5%',       // 90% height, 75% width centered
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 3,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" id="modal-modal-title">
            Inserção de Visita
          </Typography>
          <Button
            sx={{ color: 'black', borderColor: 'black' }}
            className='h-9 gap-2'
            variant='outlined'
            onClick={closeModal}>
            <X size={20} color='black' /> Fechar
          </Button>
        </Box>

        {/* Header Body content */}
        <Box sx={{ mb: 2, display: 'grid', gap: 2 }}>
          {/* Left Body content */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <AutocompleteTecnico sx={{ flex: 1 }} />
            <AutocompleteUnidade sx={{ flex: 1 }} />
            <DateTimeTextField
              label="Data de Envio"
              type="date"
              sx={{ width: '20%' }}
              focused />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <AutocompleteTurno sx={{ flex: 1 }} />
            <AutocompleteLocalizacao sx={{ flex: 1 }} />
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <BackButton
              sx={{ flex: 1 }}
              onClick={closeModal}
              className='w-48'
              startIcon={<AddIcon />}
              variant="outlined"
            >
              Adicionar a Lista
            </BackButton>
            <SubmitButton
              sx={{ flex: 1 }}
              onClick={closeModal}
              className='w-48'
              startIcon={<SendIcon />}
              variant="outlined"
            >
              Lançar visita
            </SubmitButton>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
          <TableAddVisitas />
        </Box>
      </Box>
    </Modal>
  );
}


