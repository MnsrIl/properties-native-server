const { Router} = require("express");
const { usersController } = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/:id", authMiddleware, usersController.getUserById);
router.get("/", authMiddleware, usersController.getUsers);
router.post("/sign-up", usersController.signUp);
router.post("/sign-in", usersController.signIn);

module.exports = router;
