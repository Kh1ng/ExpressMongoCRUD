require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const mongoString = process.env.DATABASE_URL;

const app = express();
const routes = require("./routes/routes");
app.use("/api", routes);
const port = 3000;

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
