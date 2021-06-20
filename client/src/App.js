import React from 'react';
import Container from '@material-ui/core/Container';
import { PersonsPage } from './pages/Persons'

export function App() {
  return (
    <Container maxWidth="md">
      <PersonsPage />
    </Container>
  );
}
