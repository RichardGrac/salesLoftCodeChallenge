import gql from 'graphql-tag'

export const COUNT_UNIQUE_CHARACTERS = gql`
  query countUniqueCharacters($texts: [String]!) {
    countUniqueCharacters(input: { texts: $texts }) {
      text
      keyValuePair {
        key
        value
      }
    }
  }
`;
