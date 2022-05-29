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
    const { changeList, loaded } = useContext(StoresContext);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/8c35bbb1-eed6-4eeb-aa83-1132b5830f57')
        .then((res) => res.json())
        .then((json) => {
            changeList(json.stores);
        })
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