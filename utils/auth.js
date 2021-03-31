const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement ---- checking to make sure user is logged in. if user is logged in it allows the function to continue
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
