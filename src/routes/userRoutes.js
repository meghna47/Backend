const router = require("express").Router();

const controllers = require("../controllers");

router.post("/", controllers.user.createUser);

module.exports = router;

/*

/user    post
/auth/login   post
/auth/register     post


*/
