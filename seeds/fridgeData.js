const { INET } = require("sequelize/types");
const { fridge, User } = require("../models");

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

it("seed database", async (done) => {
  for (const f of fridge) {
    const seedFridge = new seedFridge(u);
    await fridge.save();
  }
});

module.exports = seedFridge;
