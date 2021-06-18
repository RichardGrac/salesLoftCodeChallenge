const { persons } = require('./resolvers/persons')

module.exports = {
  Query: {
    persons,
  }
}
