const User = require("./User");
const Fridge = require("./Fridge");

User.hasMany(Dishes_Owned, {
  foreignKey: "user_id",
});

Fridge.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Fridge };
