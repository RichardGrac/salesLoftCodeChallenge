import React from 'react';
import Container from '@material-ui/core/Container';

import { PersonsPage } from './pages/persons'

export function App() {
  return (
    <Container maxWidth="md">
      <PersonsPage />
    </Container>
  );
}
