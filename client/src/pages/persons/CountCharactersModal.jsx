import React, { Fragment } from "react";
import PropTypes from 'prop-types'

import { useQuery } from '@apollo/react-hooks'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'

import { COUNT_UNIQUE_CHARACTERS } from '../../graphql'
import { CountCharacterTable } from './CountCharacterTable'
import { Loader } from '../../components/Loader'
import { ErrorComponent } from '../../components/ErrorComponent'

export function CountCharactersModal({
   isOpen,
   handleClose,
   texts,
}) {
  const { data, loading, error } = useQuery(COUNT_UNIQUE_CHARACTERS, {
    variables: { texts }
  });

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      data-testid="count-characters-dialog"
    >
      <DialogTitle id="scroll-dialog-title">Characters Counter</DialogTitle>
      <DialogContent dividers>
        <Loader loading={loading} />
        <ErrorComponent error={error} />
        {data ? (
          <Fragment>
            <DialogContentText
              id="scroll-dialog-description"
              tabIndex={-1}
            >
              It displays each text string with their each unique letter counting. <br/>
              Spaces, tabs or new lines are not counted and upper or lower casing is indifferent. <br/>
            </DialogContentText>
            {data.countUniqueCharacters.map((edge, i) => (
              <div key={`edge.text-${i}`} style={{ marginBottom: "1rem" }}>
                <Typography variant="overline" display="block" gutterBottom>
                  {edge.text}
                </Typography>
                <br/>
                <CountCharacterTable keyValuePairArray={edge.keyValuePair} />
              </div>
            ))}
          </Fragment>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" data-testid="ok-button">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

CountCharactersModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}
