import React from "react";
import PropTypes from 'prop-types'

import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

export function SimpleTable({ headers, columns }) {
  return (
    <div
      style={{ display: 'flex', justifyContent: "center" }}
      data-testid="simple-table"
    >
      <TableContainer component={Paper} style={{ maxWidth: "75%" }}>
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              {headers.map((header, i) => (
                <TableCell key={`header-${i}`}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {columns.map((cellValues, i) => (
              <TableRow key={`row-${i}`}>
                {cellValues.map((cellValue, j) => (
                  <TableCell key={`cell-${i}-${j}`}>
                    {cellValue}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

SimpleTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.node),
  columns: PropTypes.arrayOf(PropTypes.node),
}
