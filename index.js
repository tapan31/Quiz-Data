const express = require("express");
const cors = require("cors");
const questionsData = require("./data/questions.json");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Endpoint for questions
app.get("/questions", (req, res) => {
  const questions = questionsData.questions;
  res.json(questions);
});

// Endpoint for highscores
app.get("/highscore", (req, res) => {
  const highscores = questionsData.highscore;
  res.json(highscores);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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
