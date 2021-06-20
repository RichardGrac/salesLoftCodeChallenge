import React from 'react'
import Typography from '@material-ui/core/Typography'

import { Table } from '../components/DataTable'
import { GET_PERSONS } from '../graphql'

const peopleSortFieldMap = {
  name: "NAME",
  jobTitle: "TITLE",
  createdAt: "CREATED_AT",
  updatedAt: "UPDATED_AT",
}

const columns = [
  { id: 'name', label: 'Name', disableSorting: false },
  { id: 'email', label: 'Email', disableSorting: true },
  { id: 'jobTitle', label: 'Job Title', disableSorting: false },
];

export function PersonsPage() {
  const [selectedItems, setSelectedItems] = React.useState([]);

  return (
    <div data-testid="persons-page">
      <br />
      <Typography variant="h4" gutterBottom>
        SalesLoft Code Challenge
      </Typography>
      <br />
      <Table
        query={GET_PERSONS}
        queryNodeName="persons"
        defaultOrderBy="name"
        defaultOrder="desc"
        defaultRowsPerPage={10}
        rowsPerPageOptions={[10, 25, 50]}
        currentPage={0}
        sortFieldMap={peopleSortFieldMap}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        columns={columns}
      />
    </div>
  );
}
