const router = require('express').Router();
const { User } = require('../models');
const { Fridge } = require('../models');


router.post('/fridge', async (req, res) => {
  try {
        const fridgeItem = await Fridge.findOne({ where: { name: req.body.name } });

        if (!fridgeItem) {
          const response = await fetch('/api/fridge', {
            method: 'POST',
            body: JSON.stringify({ name }),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to add item');
          }
        
        }
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router