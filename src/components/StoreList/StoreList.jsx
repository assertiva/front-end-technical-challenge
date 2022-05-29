import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

// MUI Components
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

// MUI Icons
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';

// MUI styles
const BoxStyled = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main
}));

const PaginationStyled = styled(Pagination)`
    background-color: #0e0e0e;
    padding: 10px;

    ul {
        li {
            div {
                color: #fff;
            }

            button {
                color: #fff;
                border-color: #fff;

                &.Mui-selected,
                &.Mui-selected:hover {
                    background-color: #404040;
                    border-color: #cbcbcb;
                    color: #fff;
                }
            }
        }
    }
`;

const ListItemStyled = styled(ListItem)`
    transition: .1s all ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #000;
    }

    .MuiListItemText-root {
        padding: 0 15px;

        span {
            color: #fff;
        }

        p {
            color: rgb(255 255 255 / 60%);
        }
    }

    &.negative {
        background-color: #ff2b2b;
        
        .MuiListItemText-root {
            span {
                color: #ffffff;
            }

            p {
                color: rgb(255 222 222 / 60%);
            }
        }

        &:hover {
            background-color: #ff0000;
        }
    }
`;

const StoreList = () => {
    const [stores, setStores] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = useState(1);

    const splitIntoChunk = (arr, chunk) => {
        while(arr.length > 0) {
    
            let tempArray;
            tempArray = arr.splice(0, chunk);
            // console.log(tempArray);

            setStores(oldArray => [...oldArray, tempArray]);
        }

        setLoaded(true);
    }

    const changePage = (event, value) => {
        setPage(value);
    }

    useEffect(() => {
        fetch('https://run.mocky.io/v3/8c35bbb1-eed6-4eeb-aa83-1132b5830f57')
        .then((res) => res.json())
        .then((json) => {
            splitIntoChunk(json.stores, 10);
        })
    }, []);

    if (loaded)
        return (
            <>
                <PaginationStyled
                    count={stores.length}
                    variant="outlined"
                    shape="rounded"
                    onChange={(event, value) => changePage(event, value)}
                />

                <BoxStyled sx={{ width: '100%' }}>
                    <List sx={{padding: 0}}>
                        {
                            stores[page-1].map((store, index) => (
                                <div key={index}>
                                    <ListItemStyled
                                        disablePadding
                                        className={store.revenue < 15000 ? 'negative' : ''}
                                    >
                                        <ListItemText
                                            primary={store.name}
                                            secondary={`R$ ${store.revenue.toLocaleString('pt-BR')}`}
                                        />
                                    </ListItemStyled>
                                    <Divider sx={{backgroundColor: '#3e3e3e'}}/>
                                </div>
                            ) )
                        }
                    </List>
                </BoxStyled>
            </>
        );
    return(
        <Box
            sx={{
                    width: '100%',
                    maxWidth: 360,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItens: 'center',
                    padding: '30px 0'
                }}
            >
            <HourglassBottomTwoToneIcon />
            <Typography>Carregando...</Typography>
        </Box>
    );
}
 
export default StoreList;