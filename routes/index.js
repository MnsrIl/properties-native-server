const { Router } = require("express");

const usersRoute = require("./users.route");

const router = Router();

router.use("/users", usersRoute);

module.exports = router;
