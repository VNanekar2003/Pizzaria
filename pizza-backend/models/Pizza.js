const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  price: Number,
  image: String,
  description: String,

  ingredients: [
    {
      id: String,
      iname: String
    }
  ],

  topping: [
    {
      id: String,
      tname: String,
      price: String
    }
  ]
});

module.exports = mongoose.model("Pizza", pizzaSchema);
