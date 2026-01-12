const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ message: "Order placed successfully" });
};
