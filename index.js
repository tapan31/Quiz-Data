const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");
const compression = require("compression");

const app = express();
const router = jsonServer.router("./data/questions.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

// Add compression middleware
app.use(compression());
app.use(middlewares);
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export app for Vercel

/* const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/questions.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");
const compression = require("compression");

const PORT = process.env.PORT || 3001;

// Add compression middleware
server.use(compression());
server.use(middlewares);
server.use(router);
server.use(cors());

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
}); */
