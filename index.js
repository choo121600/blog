const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    return err;
  }
});

const User = require("./models/user");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/users/register", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) return res.json({ success: false, err });
  });
  return res.status(200).json({
    success: true,
    data: user,
    message: "Update Success",
  });
});

app.listen(5000);
