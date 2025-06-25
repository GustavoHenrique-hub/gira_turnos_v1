import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SearchButton = styled(Button)(({ theme }) => ({
    color: 'green', 
    borderColor: 'green',
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", 
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
    height: '35px',
    "&:hover": {
      backgroundColor: "rgba(0, 255, 0, 0.3)",
      borderColor: 'green',
    },
  }));

  export default SearchButton