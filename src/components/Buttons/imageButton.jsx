import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

const images = [
    {
        url: 'https://ui-avatars.com/api/?name=Gustavo+Silva&background=B8FF98&color=002039&bold=true',
        title: 'Breakfast',
        width: '40px',
        height: '40px',
    }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    borderRadius: 10,
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#B8FF98",
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
    borderRadius: 10
}));

export default function ImageButtonComponent() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            {images.map((image) => (
                <ImageButton
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                        height: image.height,
                    }}
                >
                    <ImageSrc style={{
                        backgroundImage: `url(${image.url})`,
                        borderRadius: 10
                    }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                </ImageButton>
            ))}
        </Box>
    );
}