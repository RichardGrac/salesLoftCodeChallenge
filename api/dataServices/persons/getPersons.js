
const get = require('../../axios/get')
const buildGetPersonsQuery = require('./buildGetPersonsQuery')
const { PEOPLE_URL } = require("../../config/variables");
const { mapPaginationToGQL, mapPersonToGQL } = require('../../mappers')

const getPersons = async (args) => {
  const query = buildGetPersonsQuery(PEOPLE_URL, args);
  const personsResponse = await get({ url: query });

  return {
    pageInfo: mapPaginationToGQL(personsResponse.metadata.paging),
    edges: personsResponse.data.map(person => mapPersonToGQL(person)),
  };
}

module.exports = getPersons;
