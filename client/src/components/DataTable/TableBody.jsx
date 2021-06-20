import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import MaterialTableBody from '@material-ui/core/TableBody';

import { findIndexInArray, removeByIndex } from '../../utilities'

export function TableBody({
  edges,
  columns,
  selectedItems,
  setSelectedItems
}) {
  const handleClick = (event, clickedItem) => {
    const indexOfSelected = findIndexInArray(selectedItems, clickedItem.id);

    if (indexOfSelected >= 0) {
      setSelectedItems(removeByIndex(selectedItems, indexOfSelected));
      return;
    }

    setSelectedItems(selectedItems.concat(clickedItem));
  };

  const isSelected = (id) => findIndexInArray(selectedItems, id) >= 0

  return (
    <MaterialTableBody>
      {edges.map((edge) => {
        const isItemSelected = isSelected(edge.id);

        return (
          <TableRow
            hover
            onClick={(event) => handleClick(event, edge)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={edge.id}
            data-testid="table-row"
            selected={isItemSelected}
          >
            <TableCell padding="checkbox">
              <Checkbox checked={isItemSelected} />
            </TableCell>
            {columns.map(column => (
              <TableCell align="center" key={column.id}>
                {edge[column.id]}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </MaterialTableBody>
  );
}

TableBody.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedItems: PropTypes.func.isRequired,
  edges: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
