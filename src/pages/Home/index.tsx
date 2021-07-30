import React, { useMemo, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Grid, InputAdornment, TextField } from '@material-ui/core';

import { getStores } from '../../services/StoresService';

import DataTable from '../../components/DataTable';
import GoogleMap from '../../components/GoogleMap';

import { Container, GridMap } from './styles';
import { Store } from '../../models/Store';

export default function Home(): JSX.Element {
  const [search, setSearch] = useState<string>('');
  const [minimumRevenue, setMinimumRevenue] = useState<number>(15000);

  const storesData = useMemo(() => {
    const stores: Store[] = getStores();

    const storesMap = stores.map((store, index) => ({
      id: index,
      revenueBRL: Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(store.revenue),
      ...store,
    }));

    if (search) {
      return storesMap.filter(store =>
        store?.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    return storesMap;
  }, [search]);

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            id="search"
            label="Pesquisa"
            variant="outlined"
            fullWidth
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="revenue"
            label="Faturamento mínimo"
            variant="outlined"
            fullWidth
            value={minimumRevenue}
            onChange={event =>
              setMinimumRevenue(Number(event.target.value) || 0)
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <DataTable storesData={storesData} />
        </Grid>
        <GridMap item xs={12} sm={6}>
          <GoogleMap
            items={storesData}
            initialPosition={{
              lat: storesData[0]?.latitude,
              lng: storesData[0]?.longitude,
            }}
            minimumRevenue={minimumRevenue}
          />
        </GridMap>
      </Grid>
    </Container>
  );
}
