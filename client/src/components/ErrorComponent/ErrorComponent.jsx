import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { cleanGraphQLError } from '../../utilities'

export function ErrorComponent({ error }) {
  if (!error) {
    return null;
  }

  return (
    <div style={{ textAlign: "center", margin: "1rem 0" }} data-testid="error-component">
      <Typography variant="button" display="block" gutterBottom>
        An error occurred while fetching your data: {cleanGraphQLError(error)}
      </Typography>
    </div>
  );
}

ErrorComponent.propTypes = {
  error: PropTypes.object,
}
