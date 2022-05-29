import React from 'react';

// MUI Components
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

// MUI Styles and settings
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    maxWidth: '300px',
  },
}));

const Header = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Desempenho das Lojas
                </Typography>

                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Buscar por loja..."
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
            </Toolbar>
        </AppBar>
    );
}
 
export default Header;