const express = require("express");
const app = express();
const cors = require("cors");
require("./config/db")
const UserRouter = require("./routes/user.route");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", UserRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// handle route not found error
app.use((req, res, next) => {
  res.status(404).json({
    messages: "page not found this route",
    statuscode: 404,
  });
});

// handle server error
app.use((error, req, res, next) => {
  res.status(500).json({
    messages: "server error",
    statuscode: 500,
    message: error.message,
  });
});

module.exports = app;
