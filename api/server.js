const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const session = require("express-session");

const server = express();

const sessionConfig = {
  name: "cookie",
  secret: "I am a secret!",
  cookie: {
    maxAge: 1000 * 10,
    secure: false, //it should be true in production
    httpOnly: true
  },
  resave: false,
  saveUninitalized: false
};

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(session(sessionConfig));
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
