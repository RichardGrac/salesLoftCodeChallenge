import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import MaterialTable from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

import { TableHead } from './TableHead'
import { TableToolbar } from './TableToolbar'
import { useStyles } from './useStyles'
import { TableBody } from './TableBody'
import { Loader } from '../Loader'
import { ErrorComponent } from '../ErrorComponent'

export function Table({
  columns,
  currentPage,
  defaultOrder = "",
  defaultRowsPerPage,
  defaultOrderBy,
  query,
  rowsPerPageOptions,
  selectedItems,
  setSelectedItems,
  sortFieldMap = {},
  queryNodeName,
}) {
  const classes = useStyles();
  const [order, setOrder] = useState(defaultOrder);
  const [orderBy, setOrderBy] = useState(defaultOrderBy);
  const [page, setPage] = useState(currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const { data, loading, error } = useQuery(query, {
    variables: {
      pagination: { size: rowsPerPage, page: page + 1 },
      sorting: { field: sortFieldMap[orderBy], direction: order.toUpperCase() },
    }
  });

  if (loading) {
    return <Loader loading />
  }

  if (error) {
    return <ErrorComponent error={error} />
  }

  const { edges, pageInfo } = data[queryNodeName];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelectedItems(edges);
      return;
    }
    setSelectedItems([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <div className={classes.root} data-testid="data-table">
      <Paper className={classes.paper}>
        <TableToolbar numSelected={selectedItems.length} />
        <TableContainer>
          <MaterialTable
            className={classes.table}
            aria-labelledby="dataTable"
            size="medium"
            aria-label="data table"
          >
            <TableHead
              numSelected={selectedItems.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={edges.length}
              columns={columns}
            />
            <TableBody
              edges={edges}
              columns={columns}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </MaterialTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={pageInfo.totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{ "data-testid": "pagination-select" }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

Table.propTypes = {
  query: PropTypes.object.isRequired,
  defaultOrderBy: PropTypes.string.isRequired,
  defaultOrder: PropTypes.oneOf(['asc', 'desc']).isRequired,
  defaultRowsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  sortFieldMap: PropTypes.object.isRequired,
  selectedItems: PropTypes.array.isRequired,
  rowsPerPageOptions: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired,
  setSelectedItems: PropTypes.func.isRequired,
  queryNodeName: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      disableSorting: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
