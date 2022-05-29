import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

// MUI Components
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

// MUI styles
const FilledInputStyled = styled(FilledInput)`
  .MuiInputAdornment-root {
      margin-top: 10px;
  }
  .MuiFilledInput-input {
      padding-top: 18px;
  }
`;

const Filter = () => {
    const [amount, setAmount] = useState('15.000,00');

    const handleChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 0, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Faturamento mínimo esperado</InputLabel>
                <FilledInputStyled
                    id="outlined-adornment-amount"
                    value={amount}
                    onChange={(e) => handleChange(e)}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Faturamento mínimo esperado"
                />
            </FormControl>
        </Box>
    );
}
 
export default Filter;