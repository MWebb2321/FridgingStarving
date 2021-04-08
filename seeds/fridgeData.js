const { Fridge } = require("../models");

const seedFridge = [
  {
    name: "Lettuce",
    refrigerated: "true",
    frozen: "false",
  },
  {
    name: "Tomato",
    refrigerated: "true",
    frozen: "false",
  },
  {
    name: "Meat",
    refrigerated: "true",
    frozen: "false",
  },
  {
    name: "Mayo",
    refrigerated: "true",
    frozen: "false",
  },
];

//Should we get rid of this first module.exports?
module.exports = seedFridge;
const seedGallery = () => Fridge.bulkCreate(seedFridge);

seedGallery();

module.exports = seedFridge;
