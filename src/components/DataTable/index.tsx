import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import { Store } from '../../models/Store';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nome',
    minWidth: 160,
  },
  {
    field: 'city',
    headerName: 'Cidade',
    sortable: false,
  },
  {
    field: 'state',
    headerName: 'Estado',
    sortable: false,
    width: 98,
  },
  {
    field: 'revenueBRL',
    headerName: 'Faturamento',
    sortable: false,
    minWidth: 140,
  },
];

type DataTableProps = {
  storesData: Store[];
};

export default function DataTable({ storesData }: DataTableProps): JSX.Element {
  return (
    <DataGrid
      rows={storesData}
      columns={columns}
      pageSize={10}
      disableColumnFilter
      disableColumnReorder
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      hideFooterRowCount
    />
  );
}
