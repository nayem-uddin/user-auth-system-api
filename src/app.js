const compression = require("compression");
const express = require("express");
const { authRouter } = require("./handleUserRequests/auth");
const { handleUnknownError } = require("./handleUserRequests/middleware");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(compression());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.get("/", (req, res, next) => {
  try {
    res.status(200).send({ message: "server is running" });
  } catch (error) {
    next(error);
  }
});

app.use(authRouter);
app.use(handleUnknownError);

module.exports = { app };
