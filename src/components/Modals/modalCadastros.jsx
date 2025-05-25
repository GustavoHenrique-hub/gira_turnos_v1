import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export function ModalCadastros({openModal, closeModal}) {
  return (
   <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ width: 400, padding: 2, backgroundColor: 'white', borderRadius: 2 }}>
          <Typography variant="h6" id="modal-modal-title">
            CADASTROS MODAL
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is the content inside the modal.
          </Typography>
          <Button onClick={closeModal}>Fechar</Button>
        </Box>
      </Modal>
  );
}


