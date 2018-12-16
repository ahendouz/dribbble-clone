const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const AuthPayload = require("./resolvers/AuthPayload");
const db = require("./db");

const resolvers = {
  Query,
  Mutation,
  AuthPayload
};

const createServer = () => {
  return new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
};

module.exports = createServer;
