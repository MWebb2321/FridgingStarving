const router = require("express").Router();
const { User, Fridge } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("homepage");
});

//Added and put in as comment, make changes as necessary

// router.get('/...', async (req, res) => {
//   try {
//     const dishData = await.dish.findAll();

//     const dish = dishData.map(dish.get({ plain: true }));

//     console.log(dish);
//     res.render('dishlist', {
//       dish,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json.(err);
//   }
// });

// Prevent non logged in users from viewing the homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const fridgeData = await Fridge.findAll({
      attributes: { exclude: ["id"] },
      order: [["name", "ASC"]],
    });

    const fridge = fridgeData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      fridge,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }

  $("button").click(function () {
    $.post(
      "fridge_db",
      {
        attributes: "id",
        order: "name",
      },
      function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
      }
    );
  });
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.post("/fridge", async (req, res) => {
  try {
    const fridgeItem = await Fridge.findOne({ where: { name: req.body.name } });

    if (!fridgeItem) {
      const response = await fetch("/api/fridge", {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: { "Content-Type": "application/json" },
      });
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

// Use withAuth middleware to prevent access to route
// router.get('/users', withAuth, async (req, res) => {

//   try {
//     // Find the logged in user based on the session ID
//     const userData = await Users.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: fridgeData }],
//     });

//     const user = userData.get({ plain: true });
//     console.log(user);
//     res.render('user', {
//       user,
//       logged_in: true
//     });
//   } catch (err) {
//     console.log(`Nope, not gonna happen`);
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get("/dishes", withAuth, async (req, res) => {
//   try {
//     const dishData = await Users.findAll({
//       attributes: { exclude: ["password"] },
//       include: [{ model: allDish }],
//     });

//     const gardeners = dishData.map((plant) => dish.get({ plain: true }));

//     console.log(dishes);
//     res.render("dishes", {
//       dishes,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
