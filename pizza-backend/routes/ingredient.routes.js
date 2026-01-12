const express = require("express");
const router = express.Router();
const controller = require("../controllers/ingredient.controller");

router.get("/", controller.getIngredients);
router.post("/load", controller.loadIngredients);

module.exports = router;
