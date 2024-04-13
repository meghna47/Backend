const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const routes = require(`./src/`);

const app = express();
const PORT = process.env.PORT || 4000;
const SECRET_KEY = "meghna_ghatiya_hai";

// Sample user data
const users = [{ id: 1, username: "meghna", password: "meghna_pswd" }];

app.use(bodyParser.json());
app.use(routes);

// User login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY);
  res.json({ token });
});

// Protected route example
app.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: req.user
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
