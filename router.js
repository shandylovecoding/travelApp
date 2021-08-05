module.exports = (express, passport) => {

    const router = express.Router();


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        res.redirect('/login')
    }

    router.get('/', (req, res) => {
        res.render('home')
    })
    router.get('/login', (req, res) => {
        res.render('login')
    })

    router.get('/signup', (req, res) => {
        res.render('signup')
    })
    router.get('/secret',isLoggedIn, (req, res) => {
      res.render('secret')
  })
    router.get('/todolist',isLoggedIn, (req, res) => {
        res.render('todolist')
    })
    router.get('/error', (req, res) => {
        res.render('error')
    })
    //Handle passport logic
router.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/secret",
      failureRedirect: "/error",
    })
  );

  // Sign up Route
  router.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/login",
      failureRedirect: "/error",
    })
  );

  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });
    return router
}