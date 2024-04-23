const services = require("../services");
const Models = require("../models");

const createUser = async (req, res) => {
  const { username, password, first_name, last_name } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  // Check if username already exists
  let user = await Models.users.findOne({
    where: { username },
    attributes: [
      "username",
      "first_name",
      "last_name",
      "profile_picture",
      "phone_number"
    ]
  });

  if (user) {
    return res.status(400).json({ error: "Username already exists" });
  }

  const newUser = { username, password, first_name, last_name };
  await Models.users.create(newUser);
  res.status(201).json({ message: "User registered successfully" });
};

const getUser = async (req, res) => {
  try {
    const { Id } = req.params;
    let user = await Models.users.findOne({
      where: { Id }
    });

    res.status(200).json(user);
  } catch (ex) {
    res.status(500).json(ex?.message);
  }
};

module.exports = {
  createUser,
  getUser
};
