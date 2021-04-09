const router = require("express").Router();
const userRoutes = require("./userRoutes");
const fridgeRoutes = require("../fridgeroutes");

router.use("/users", userRoutes);
router.use("/fridge", fridgeRoutes);

module.exports = router;
