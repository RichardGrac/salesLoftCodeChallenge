const { personsDataService } = require('../../../dataServices')

const persons = async (parent, args) => {
  return personsDataService.getPersons(args);
}

module.exports = persons;
