const Ingredient = require("../models/Ingredient");
const ingredients = require("../data/ingredients.json");

exports.loadIngredients = async (req, res) => {
  await Ingredient.deleteMany({});
  await Ingredient.insertMany(ingredients);
  res.json({ message: "Ingredients loaded" });
};

exports.getIngredients = async (req, res) => {
  const data = await Ingredient.find();
  res.json(data);
};
