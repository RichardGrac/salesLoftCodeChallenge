const get = require('../../axios/get')
const { PEOPLE_URL } = require("../../config/variables");
const { mapPaginationToGQL, mapPersonToGQL } = require('../../mappers')

const getPersons = async () => {
  const personsResponse = await get({ url: PEOPLE_URL });

  return {
    pageInfo: mapPaginationToGQL(personsResponse.metadata.paging),
    edges: personsResponse.data.map(person => mapPersonToGQL(person)),
  };
}

module.exports = getPersons;
