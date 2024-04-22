const express = require("express");
const bodyParser = require("body-parser");
const routes = require(`./src/routes`);
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors(/*{
    origin: "*",
    credentials: false,
    optionsSuccessStatus: 200
  }*/)
);

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
