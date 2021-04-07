const { Pantry } = require("../models");

const pantrydata = [
  {
    name: "Cereal",
  },
  {
    name: "Bread",
  },
  {
    name: "Top Ramen",
  },
];

const seedPantry = () => Pantry.bulkCreate(pantrydata);

module.exports = seedPantry;
