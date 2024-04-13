const services = require("../services");
const { Models } = require("../database.js");

const createUser = async (req, res) => {
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
  createUser
};
