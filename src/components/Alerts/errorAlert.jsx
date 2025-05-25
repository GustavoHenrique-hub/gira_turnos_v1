import Alert from '@mui/joy/Alert';
import Button from '@mui/material/Button';
import { Snackbar } from '@mui/joy';

import InfoIcon from '@mui/icons-material/Info';
import { X } from 'lucide-react';
import { Slide } from '@mui/material';

function SlideDown(props) {
    return <Slide {...props} direction="up" />;
}

export default function ErrorAlert({ openAlert, closeAlert, message }) {
    return (
        <Snackbar
            open={openAlert}
            onClose={closeAlert}
            TransitionComponent={SlideDown}
            transitionDuration={{ enter: 300, exit: 200 }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            sx={{
                width: '450',
                height: '50'
            }}
            variant="outlined"
            color="warning"
            startDecorator={<InfoIcon />}
            endDecorator={
                <Button
                    className='w-10 hover:visible hover:opacity-100 hover:translate-x-0'
                    onClick={closeAlert}
                    size="md"
                    variant="solid"
                    color="red" >
                    <X size={20} />
                </Button>
            }
        >
            {message}
        </Snackbar>
    );
}