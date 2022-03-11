const { Router } = require("express");

const usersRoute = require("./users.route");
const propertiesRoute = require("./properties.route");

const router = Router();

router.use("/users", usersRoute);
router.use("/properties", propertiesRoute);

module.exports = router;
