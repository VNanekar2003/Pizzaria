const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerName: String,
  address: String,
  phone: String,
  pizza: Object,
  toppings: Array,
  totalPrice: Number,
  orderDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", OrderSchema);
