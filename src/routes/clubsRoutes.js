const router = require("express").Router();
const controllers = require("../controllers");

router.get("/", controllers.clubs.getClubs);
router.get("/:Id", controllers.clubs.getClub);
router.post("/JoinClub", controllers.clubs.joinClub);

module.exports = router;
