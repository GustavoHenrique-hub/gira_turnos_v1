import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export function ModalConfigs({ openModal, closeModal }) {
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
        <Typography variant="h6" id="modal-modal-title">
          CONFIGS MODAL
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          This is the content inside the modal.
        </Typography>
        <Button onClick={closeModal}>Fechar</Button>
      </Box>
    </Modal>
  );
}


