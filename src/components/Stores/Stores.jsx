import React from 'react';

// Components
import Filter from '../Filter/Filter';
import StoreList from '../StoreList/StoreList';

// MUI Components
import Container from '@mui/material/Container';

// MUI settings
const containerCSS = {
    height: '90vh',
    padding: '80px 30px 30px 30px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
}

const Stores = () => {
    return (
        <Container maxWidth="xl" fixed sx={containerCSS}>
            <Filter />
            <StoreList />
        </Container>
    );
}
 
export default Stores;