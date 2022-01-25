const express = require("express");
const path = require("path");
//import ApolloServer
const { ApolloServer } = require("apollo-server-express");
//import authMiddleware from utils/auth
const { authMiddleware } = require("./utils/auth");

//import typeDefs & resolvers

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

//create startServer function
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  await server.start();

  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});