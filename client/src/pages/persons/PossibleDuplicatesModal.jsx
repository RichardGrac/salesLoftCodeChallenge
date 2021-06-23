import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useQuery } from '@apollo/react-hooks'
import Typography from '@material-ui/core/Typography'

import { FIND_POSSIBLE_DUPLICATES } from '../../graphql'
import { InformativeModal } from '../../components/InformativeModal'
import { SimpleTable } from '../../components/SimpleTable'

function PossibleDuplicatesModalComponent({
  handleClose,
  texts,
}) {
  const { data, loading, error } = useQuery(FIND_POSSIBLE_DUPLICATES, {
    variables: { texts }
  });

  return (
    <InformativeModal
      handleClose={handleClose}
      isOpen
      loading={loading}
      error={error}
      content={<PossibleDuplicatesContent data={data} />}
      title="Possible Email Duplicates"
      description={(
        <Fragment>
          It displays emails that are possibly a duplicate of another email. <br/>
          Spaces, tabs or new lines are not counted and upper or lower casing is indifferent. <br/>
        </Fragment>
      )}
    />
  );
}

export function PossibleDuplicatesContent({ data }) {
  if (!data) {
    return null;
  }

  if (!data.findPossibleDuplicates.length) {
    return (
      <Typography
        variant="overline"
        display="block"
        gutterBottom
        data-testid="no-duplicates"
      >
        > The algorithm didn't find any possible duplicate
      </Typography>
    );
  }

  return (
    <SimpleTable
      headers={["Source", "Duplicate"]}
      columns={data.findPossibleDuplicates.map(({ source, duplicate }) => [source, duplicate])}
    />
  );
}

export function PossibleDuplicatesModal(props) {
  if (!props.isOpen) {
    return null;
  }

  return <PossibleDuplicatesModalComponent {...props} />;
}

PossibleDuplicatesModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}
