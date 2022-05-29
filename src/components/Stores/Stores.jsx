import { useContext, useEffect, useState } from 'react';
import { StoresContext } from "../../providers/stores";

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
    const { fetchStores, loaded } = useContext(StoresContext);

    useEffect(() => {
        fetchStores();
    }, []);

    if (loaded)
        return (
            <Container maxWidth="xl" fixed sx={containerCSS}>
                <Filter />
                <StoreList />
            </Container>
        );
    else
        return(
            <div>Carregando</div>
        );
}
 
export default Stores;