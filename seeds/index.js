const sequelize = require("../config/connection");
const seedFridge = require("./fridgeData");
const seedPantry = require("./pantryData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFridge();

  await seedPantry();

  process.exit(0);
};

seedAll();
