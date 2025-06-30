import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextFieldObjetivoDaVisita = styled(TextField)(({ theme }) => ({
  borderColor: 'black',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: 'black',
  },
}));

export default TextFieldObjetivoDaVisita
