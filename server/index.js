const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const TaskRoutes = require("./routes/to-do");
require("dotenv").config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/tasks", TaskRoutes);

const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Port Running On : ${PORT}`)))
  .catch((error) => console.log(error.message));
