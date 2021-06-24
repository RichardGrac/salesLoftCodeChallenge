import React from 'react'
import PropTypes from 'prop-types'
import MaterialTableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import TableSortLabel from '@material-ui/core/TableSortLabel'

export function TableHead({
  allSelected,
  columns,
  onSelectAllClick,
  order,
  orderBy,
  onRequestSort,
}) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const getSortDirection = (column) => {
    if (column.disableSorting) {
      return;
    }

    if (orderBy !== column.id) {
      return;
    }

    return order;
  }

  return (
    <MaterialTableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={allSelected}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'check all rows',
              "data-testid": "check-all-rows"
            }}
          />
        </TableCell>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align="center"
            sortDirection={getSortDirection(column)}
          >
            {column.disableSorting ? (
              <div>{column.label}</div>
            ) : (
              <TableSortLabel
                active={Boolean(getSortDirection(column))}
                direction={order}
                onClick={createSortHandler(column.id)}
                data-testid={`sort-header-${column.id}`}
              >
                {column.label}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </MaterialTableHead>
  );
}

TableHead.propTypes = {
  allSelected: PropTypes.bool.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      disableSorting: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
