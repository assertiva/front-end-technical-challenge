import { useRef, useContext } from 'react';
import { StoresContext } from "../../providers/stores";
import { styled } from '@mui/material/styles';

// MUI Components
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// MUI styles
const FilledInputStyled = styled(FilledInput)`
  .MuiInputAdornment-root {
      margin-top: 10px;
  }
  .MuiFilledInput-input {
      padding-top: 18px;
  }
`;

const ButtonStyled = styled(Button)`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 20px;
    z-index: 100;
    border-radius: 0 5px 0 0;
`;

const Filter = () => {
    const { revenue, changeRevenue } = useContext(StoresContext);
    const inputElement = useRef();

    const handleChange = (e) => {
        changeRevenue(e.target.value);
        // alert(e.target.value.replace(',', '.'))
    };

    const Clean = () => {
        changeRevenue('');
        inputElement.current.children[1].focus();
    }

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
                <ButtonStyled
                    variant="text"
                    onClick={() => Clean()}
                >
                    LIMPAR
                </ButtonStyled>

                <InputLabel htmlFor="outlined-adornment-amount">Faturamento mínimo esperado</InputLabel>

                <FilledInputStyled
                    id="outlined-adornment-amount"
                    value={revenue.toLocaleString('pt-BR')}
                    onChange={(e) => handleChange(e)}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Faturamento mínimo esperado"
                    ref={inputElement} 
                />
            </FormControl>
        </Box>
    );
}
 
export default Filter;