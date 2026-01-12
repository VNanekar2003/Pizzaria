const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/pizzaDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/pizzas", require("./routes/pizza.routes"));
app.use("/api/ingredients", require("./routes/ingredient.routes"));
app.use("/api/orders", require("./routes/order.routes"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
