const { Models } = require("../database.js");
const services = require("../services");

const login = async (req, res) => {
  const { username, password, token } = req.body;

  if (token) {
    services.auth.verifyToken(token, (err, user) => {
      if (!err) res.send({ token, user });
      else res.status(400).send("Session Expired");
    });
    return;
  }

  let { dataValues: user } = await Models.user.findOne({
    where: { username }
  });

  if (!user)
    return res.status(401).json({ field: "username", error: "user not found" });

  if (password != user.password)
    return res.status(401).json({ field: "password", error: "Wrong password" });

  const { token: _token, expiresAt } = services.auth.createJwt(user);

  res.send({ token: _token, expiresAt, user });
};

const checkAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  services.auth.verifyToken(authHeader, (err, user) => {
    if (err) {
      console.log(err);
      return res.send({ error: "Invalid Token" });
    }
    req.user = user;
    if (urlPaths.includes("user") && user.role > 1)
      return res.status(401).send({ error: "Not Authorized" });
    next();
  });
};

const register = async (req, res) => {
  const { username, password, first_name, last_name } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  // Check if username already exists
  let user = await Models.user.findOne({
    where: { username }
  });

  if (user) {
    return res.status(400).json({ error: "Username already exists" });
  }

  const newUser = { username, password, first_name, last_name };
  await Models.user.create(newUser);
  res.status(201).json({ message: "User registered successfully" });
};

module.exports = {
  checkAuth,
  login,
  register
};
