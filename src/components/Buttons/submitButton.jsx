import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SubmitButton = styled(Button)(({ theme }) => ({
    color: '#6700b3',       // Cor do texto
    borderColor: '#6700b3',  // Cor da borda
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',  // Sombra personalizada
    height: '35px',
    '&:hover': {
      backgroundColor: 'rgba(103, 0, 179, 0.3)',  // Cor de fundo ao passar o mouse
      borderColor: '#6700b3',
    },
  }));

export default SubmitButton