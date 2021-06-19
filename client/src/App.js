import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { PersonsDataTable } from './components/PersonsDataTable'

export function App() {
  return (
    <Container maxWidth="md">
      <br />
      <Typography variant="h4" gutterBottom>
        SalesLoft Code Challenge
      </Typography>
      <br />
      <PersonsDataTable />
    </Container>
  );
}
