const router = require("express").Router();
const { User } = require("../models");
const { Fridge } = require("../models");

// all routes are at /api/fridge
router.post("/", async (req, res) => {
  try {
    const fridgeItem = await Fridge.findOne({ where: { name: req.body.name } });

    if (!fridgeItem) {
      const response = await Fridge.create(req.body);
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to add item");
      }
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
