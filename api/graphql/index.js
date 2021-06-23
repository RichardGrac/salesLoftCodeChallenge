const { findPossibleDuplicates } = require('./resolvers/findPossibleDuplicates')
const { persons } = require('./resolvers/persons')
const { countUniqueCharacters } = require('./resolvers/countUniqueCharacters')

module.exports = {
  Query: {
    persons,
    countUniqueCharacters,
    findPossibleDuplicates,
  }
}
