const { fridge } = require("../models");

const seedFridge = [
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
