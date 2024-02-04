const jsonServer = require("json-server");
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
});
