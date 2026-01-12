const express = require("express");
const router = express.Router();
const controller = require("../controllers/pizza.controller");

router.get("/load", controller.loadPizzas);
router.get("/", controller.getPizzas);

module.exports = router;
