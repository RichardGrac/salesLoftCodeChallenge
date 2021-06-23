import gql from 'graphql-tag'

export const FIND_POSSIBLE_DUPLICATES = gql`
  query findPossibleDuplicates($texts: [String!]!) {
    findPossibleDuplicates(input: { texts: $texts }) {
      source
      duplicate
    }
  }
`
