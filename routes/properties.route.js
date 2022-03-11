const { Router } = require("express");
const { propertiesController } = require("../controllers/properties.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/:id", authMiddleware, propertiesController.getPropertyById);
router.get("/", authMiddleware, propertiesController.getProperties);
router.post("/", authMiddleware, propertiesController.addProperty);

module.exports = router;
