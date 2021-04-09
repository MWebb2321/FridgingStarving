const User = require("./User");
const Fridge = require("./Fridge");

User.hasMany(Fridge, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Fridge.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Fridge };
