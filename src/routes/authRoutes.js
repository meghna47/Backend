const router = require("express").Router();
const controllers = require("../controllers");

router.post("/login", controllers.auth.login);
router.post("/register", controllers.auth.register);

module.exports = router;
