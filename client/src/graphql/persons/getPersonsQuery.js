import gql from 'graphql-tag'

export const GET_PERSONS = gql`
  query getPersons($pagination: Pagination, $sorting: Sorting){
    persons(pagination: $pagination, sorting: $sorting) {
      pageInfo {
        perPage
        currentPage
        nextPage
        prevPage
        totalPages
        totalCount
      }
      edges {
        id
        name
        email
        jobTitle
      }
    }
  }
`;
