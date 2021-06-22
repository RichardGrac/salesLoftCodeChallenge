import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

export function Loader({ loading }) {
  if (!loading) {
    return null;
  }

  return (
    <div style={{ textAlign: "center", margin: "1rem 0" }} data-testid="loader">
      <CircularProgress aria-label="loading data..." />
      <br/>
      🧙‍♀️Loading the magic 🎩...
    </div>
  );
}

Loader.propTypes = {
  loading: PropTypes.bool,
}
