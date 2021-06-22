import React from 'react'
import PropTypes from 'prop-types'

import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

export function CountCharacterTable({ keyValuePairArray }) {
  if (!keyValuePairArray || !keyValuePairArray.length) {
    return null;
  }

  return (
    <div
      style={{ display: 'flex', justifyContent: "center" }}
      data-testid="count-character-table"
    >
      <TableContainer component={Paper} style={{ maxWidth: "50%" }}>
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>Character</TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {keyValuePairArray.map((keyValuePair) => (
              <TableRow key={keyValuePair.key}>
                <TableCell>{keyValuePair.key}</TableCell>
                <TableCell>{keyValuePair.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

CountCharacterTable.propTypes = {
  keyValuePairArray: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.number,
    }).isRequired
  ),
}
