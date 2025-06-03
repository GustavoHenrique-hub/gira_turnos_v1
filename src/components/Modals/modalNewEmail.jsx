import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AutocompleteTecnico from '../AutoCompletes/autoCompleteNewVisita';
import { X } from 'lucide-react';



export function ModalNewEmail({ openModal, closeModal }) {
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
        width: 1000,
        height: 500,
        bgcolor: 'background.paper',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
      }}>
        {/* Header do Modal */}
        <Box className='flex justify-between h-20 w-[100%]'>
          <Typography variant="h6" id="modal-modal-title">
            EMAIL MODAL
          </Typography>

          <Button sx={{ color: 'black' }} className='h-[40%] gap-2' onClick={closeModal}>
            <X size={20} color='black' /> <span>Fechar</span>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}


