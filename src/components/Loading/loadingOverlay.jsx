// LoadingOverlay.jsx
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Card, LinearProgress, Typography } from '@mui/material';

export default function LoadingOverlay({ open }) {
    return (
        <Backdrop
            open={open}
            sx={{
                color: '#fff',
                zIndex: theme => theme.zIndex.drawer + 1,
                flexDirection: 'column'
            }}
        >
            <Box
                sx={{
                    bgcolor: 'rgba(0,0,0,0.6)',
                    p: 4,
                    borderRadius: 2,
                    textAlign: 'center',
                    minWidth: 240
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Carregando dados...
                </Typography>
                <LinearProgress color="inherit" />
            </Box>
        </Backdrop>
    );
}