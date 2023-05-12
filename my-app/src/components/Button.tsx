import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function ColorButtons() {

    const buttonStyles = {
        backgroundColor: '#4CAF50',
        color: 'white',
        margin: '7px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
        borderRadius: '4px',
        fontSize: '20px',
    }

    return (
        <Stack direction="row" spacing={2}>
            <Button color="secondary">Secondary</Button>

            <Button style={buttonStyles} variant="contained">
                ГОТОВ
            </Button>

            <Button variant="outlined" color="error">
                Error
            </Button>
        </Stack>
    );
}