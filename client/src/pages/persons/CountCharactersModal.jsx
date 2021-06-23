import React, { Fragment } from "react";
import PropTypes from 'prop-types'

import { useQuery } from '@apollo/react-hooks'
import Typography from '@material-ui/core/Typography'

import { COUNT_UNIQUE_CHARACTERS } from '../../graphql'
import { InformativeModal } from '../../components/InformativeModal'
import { SimpleTable } from '../../components/SimpleTable'
import { Spacer } from '../../components/Spacer'

function CountCharactersModalComponent({
   handleClose,
   texts,
}) {
  const { data, loading, error } = useQuery(COUNT_UNIQUE_CHARACTERS, {
    variables: { texts }
  });

  return (
    <InformativeModal
      handleClose={handleClose}
      isOpen
      loading={loading}
      error={error}
      content={<CountCharactersContent data={data} />}
      title="Characters Counter"
      description={(
        <Fragment>
          It displays each text string with their each unique letter counting. <br/>
          Spaces, tabs or new lines are not counted and upper or lower casing is indifferent. <br/>
        </Fragment>
      )}
    />
  )
}

export function CountCharactersContent({ data }) {
  if (!data) {
    return null;
  }

  return data.countUniqueCharacters.map((edge, i) => (
    <div key={`${edge.text}-${i}`} style={{ marginBottom: "1rem" }}>
      <Typography variant="overline" display="block" gutterBottom>
        {edge.text}
      </Typography>
      <Spacer />
      {edge.keyValuePair && edge.keyValuePair.length ? (
        <SimpleTable
          headers={["Character", "Count"]}
          columns={edge.keyValuePair.map(({ key, value }) => [key, value])}
        />
      ) : null}
    </div>
  ));
}

export function CountCharactersModal(props) {
  if (!props.isOpen) {
    return null;
  }

  return <CountCharactersModalComponent {...props} />;
}

CountCharactersModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}
