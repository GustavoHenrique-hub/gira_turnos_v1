import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const DateTimeTextField = styled(TextField)(({ theme }) => ({
  borderColor: 'black',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: 'black',
  }
}));

export default DateTimeTextField