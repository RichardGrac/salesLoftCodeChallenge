const dotenv = require("dotenv");

const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const { makeExecutableSchema } = require("graphql-tools");

const { PORT } = require("./config/variables");
const resolvers = require("./graphql");
const typeDefs = importSchema("**/*.graphql");

const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({
  schema,
});

dotenv.config();

server
  .listen({ port: PORT })
  .then(r => {
    console.log(`--------> Apollo Server running at: ${r.url} <--------`);
  }).catch(e => {
    console.error(`Error initiating Apollo Server, error:`, e);
  });
