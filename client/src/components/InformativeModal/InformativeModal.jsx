import React from "react";
import PropTypes from 'prop-types'

import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'

import { Loader } from '../Loader'
import { ErrorComponent } from '../ErrorComponent'

export function InformativeModal({
  isOpen,
  handleClose,
  title,
  description,
  loading,
  error,
  content,
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      data-testid="custom-dialog"
    >
      {title ? (
        <DialogTitle id="scroll-dialog-title" data-testid="title">
          {title}
        </DialogTitle>
      ) : null}
      <DialogContent dividers>
        <Loader loading={loading} />
        <ErrorComponent error={error} />
        {description ? (
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
            data-testid="description"
          >
            {description}
          </DialogContentText>
        ) : null}
        {content}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" data-testid="ok-button">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

InformativeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  description: PropTypes.node,
  loading: PropTypes.bool,
  error: PropTypes.object,
  content: PropTypes.node,
}
