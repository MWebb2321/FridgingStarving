module.exports = {
  fridge_items: async () => {
    try {
      const fridgeData = await Fridge.findAll({
        attributes: { exclude: ['id'] },
        order: [['name', 'ASC']],
      });
  
      const fridge = fridgeData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', {
        fridge,
        // Pass the logged in flag to the template
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
