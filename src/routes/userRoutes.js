const router = require("express").Router();

const controllers = require("../controllers");

router.post("/", controllers.user.createUser);
router.get("/:Id", controllers.user.getUser);

module.exports = router;
