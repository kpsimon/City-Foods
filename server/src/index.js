const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middlewares");
const logs = require("./api/logs");

const app = express();
const PORT = process.env.PORT || 8000;

console.log(process.env.NODE_ENV);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json());

app.get("/", (req, res, next) => {
  res.json({ message: "Hello World!" });
});

app.use("/api/logs", logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
