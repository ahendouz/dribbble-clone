const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./variables.env" });

const Shot = require("./models/Shot");
const User = require("./models/User");

// Bringing in graphQL-Express middleware => to connect graphql with express
const { graphqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const expressPlayground = require("graphql-playground-middleware-express");

const { typeDefs } = require("./schema.js");
const { resolvers } = require("./resolvers.js");

// Create schema
const schema = makeExecutableSchema({
  typeDefs, // typeDefs: typeDefs
  resolvers
});

// Connecting to the database
mongoose
  .connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected 📥"))
  .catch(err => console.error(err));

// Initialises application
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};
app.use(cors(corsOptions));

// Setup JWT authontication middleware
app.use(async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token !== "null") {
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET);
      // console.log(currentUser);
      req.currentUser = currentUser;
    } catch (err) {
      console.log(err);
    }
  }
  console.log(token);
  next();
});

// Create Graphiql application
app.get("/playground", expressPlayground.default({ endpoint: "/graphql" }));

// Connect schema with GraphQl
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress(({ currentUser }) => ({
    schema,
    context: {
      // adding Mongoose models to graphQL
      Shot,
      User,
      currentUser
    }
  }))
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT} 🚀`);
});
