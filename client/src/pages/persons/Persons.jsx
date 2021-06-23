import React from 'react'
import Typography from '@material-ui/core/Typography'
import VisibilityIcon from '@material-ui/icons/Visibility'
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

import { Table as DataTable } from '../../components/DataTable'
import { GET_PERSONS } from '../../graphql'
import { CountCharactersModal } from './CountCharactersModal'
import { PossibleDuplicatesModal } from './PossibleDuplicatesModal'
import { Spacer } from '../../components/Spacer'

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
  const [texts, setTexts] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenDuplicates, setIsOpenDuplicates] = React.useState(false);

  return (
    <div data-testid="persons-page">
      <CountCharactersModal
        handleClose={handleClose(setIsOpen)}
        texts={texts}
        isOpen={isOpen}
      />
      <PossibleDuplicatesModal
        handleClose={handleClose(setIsOpenDuplicates)}
        texts={texts}
        isOpen={isOpenDuplicates}
      />
      <Spacer size="small" />
      <Typography variant="h4" color="textPrimary">
        SalesLoft Code Challenge
      </Typography>
      <Link
        variant="subtitle1"
        color="textSecondary"
        href="https://ricardo-garcia.com.mx/"
        rel="noopener noreferrer"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        by Ricardo Garcia
      </Link>
      <Spacer />
      <Button
        variant="contained"
        color="primary"
        onClick={onHandleClick(selectedItems, setTexts, setIsOpen)}
        startIcon={<VisibilityIcon />}
        disabled={selectedItems.length === 0}
      >
        Count characters
      </Button>
      <Spacer orientation="horizontal" />
      <Button
        variant="contained"
        color="secondary"
        onClick={onHandleClick(selectedItems, setTexts, setIsOpenDuplicates)}
        startIcon={<SearchIcon />}
        disabled={selectedItems.length === 0}
      >
        Find duplicates
      </Button>
      <Spacer />
      <DataTable
        query={GET_PERSONS}
        queryNodeName="persons"
        defaultOrderBy="name"
        defaultOrder="desc"
        defaultRowsPerPage={10}
        rowsPerPageOptions={[10, 25, 50, 100]}
        currentPage={0}
        sortFieldMap={peopleSortFieldMap}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        columns={columns}
      />
    </div>
  );
}

export function onHandleClick(selectedItems, setTexts, setIsOpen) {
  return () => {
    const texts = selectedItems.map(selected => selected.email);

    setTexts(texts);
    setIsOpen(true);
  }
}

export function handleClose(setIsOpen) {
  return () => {
    setIsOpen(false)
  }
}
