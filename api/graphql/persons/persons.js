const { personsDataService } = require('../../dataServices')

const persons = async () => {
  return personsDataService.getPersons();
}

module.exports = persons;
