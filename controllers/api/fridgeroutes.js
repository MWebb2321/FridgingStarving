const router = require('express').Router();
const { User } = require('../../models');
const { Fridge } = require('../../models');
const withAuth = require("../../utils/auth");

// all routes are /api/fridge (more can be added)
router.post('/', withAuth, async (req, res) => {
  try {
        const fridgeItem = await Fridge.findOne({ where: { name: req.body.name } });
        console.log(fridgeItem)
        if (!fridgeItem) {
          const fridgeItem = await Fridge.create({
            name: req.body.name,
            user_id: req.session.user_id,
          })  
          return res.status(200).json(fridgeItem)
        }
      res.status(200).json({Message : "Item already exists"})
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router