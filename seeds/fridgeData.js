const { fridge } = require("../models");

const fridgeData = [
  {
    name: "Lettuce",
  },
  {
    name: "Tomato",
  },
  {
    name: "Meat",
  },
  {
    name: "Mayo",
  },
];

const seedGallery = () => fridge.bulkCreate(fridgeData);

module.exports = seedFridge;
