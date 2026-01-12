const Pizza = require("../models/Pizza");
const pizzas = require("../data/pizzas.json");

exports.loadPizzas = async (req, res) => {
  await Pizza.deleteMany({});
  await Pizza.insertMany(pizzas);
  res.json({ message: "Pizzas loaded" });
};

exports.getPizzas = async (req, res) => {
  const data = await Pizza.find();
  res.json(data);
};
