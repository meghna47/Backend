const services = require("../services");
const Models = require("../models");

const getClubs = async (req, res) => {
  try {
    let clubs = await Models.Clubs.findAll();

    res.status(200).json(clubs);
  } catch (ex) {
    res.status(500).json(ex?.message);
  }
};

const getClub = async (req, res) => {
  try {
    const { Id } = req.params;
    let club = await Models.Clubs.findOne({
      where: { Id },
      include: [
        {
          model: Models.users,
          as: "ClubPresident",
          attributes: ["username", "first_name", "last_name", "profile_picture", "phone_number"],
        },
      ],
    });

    res.status(200).json(club);
  } catch (ex) {
    res.status(500).json(ex?.message);
  }
};

const joinClub = async (req, res) => {};

const getClubPresident = async (req, res) => {
  try {
    let users = await Models.Clubs.findAll({
      //attributes: { include: ["ClubPresident"] },
      include: [
        {
          model: Models.users,
          as: "ClubPresident",
          attributes: ["username", "first_name", "last_name"]
        }
      ]
    });

    res.status(200).json(users.map((u) => u.ClubPresident));
  } catch (ex) {
    res.status(500).json(ex?.message);
  }
};

module.exports = {
  getClubs,
  getClub,
  getClubPresident,
  joinClub
};
