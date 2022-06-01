import { useState } from 'react';
import { useStores } from '../hooks/useStores';
import usePagination from '../hooks/usePagination';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pagination, Stack } from '@mui/material';
import styles from './styles.module.scss';

import { Search } from '../Search';

export function StoreTable() {
  const { stores } = useStores();

  const [page, setPage] = useState(1);

  const PER_PAGE = 10;

  let totalPages = Math.ceil(stores.length / PER_PAGE);

  const _DATA = usePagination({
    data: stores,
    itemsPerPage: PER_PAGE,
  });

  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Search />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Loja</TableCell>
              <TableCell align="right">Faturamento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_DATA.currentData().map((store: any) => (
              <TableRow
                key={store.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {store.name}
                </TableCell>
                <TableCell align="right">{store.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className={styles.paginationContainer}>
        <Stack spacing={2}>
          <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </>
  );
}
