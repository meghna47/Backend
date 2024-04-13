const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./config");
const routes = require(`./routes`);

const app = express();
const PORT = config.port;
const SECRET_KEY = config.sessionSecret;

// Sample user data
const users = [{ id: 1, username: "meghna", password: "meghna_pswd" }];

app.use(
  cors(/*{
    origin: "*",
    credentials: false,
    optionsSuccessStatus: 200
  }*/)
);

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
