const { Pantry } = require("../models");

const seedPantry = [
  {
    name: "Cereal",
    refrigerated: "false",
    frozen: "false",
  },
  {
    name: "Bread",
  },
  {
    name: "Top Ramen",
  },
];

const seedPantry = () => Pantry.bulkCreate(pantryData);

module.exports = seedPantry;
