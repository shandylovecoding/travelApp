const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const handlebars = require("express-handlebars");


const router = require("./router.js")(express, passport);

const app = express();
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "Super Secret",
    resave: false,
    saveUninitialized: true,
  })
);

require("dotenv").config();

const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);
console.log(knexFile)


app.use(passport.initialize());
app.use(passport.session());

const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("./bcrypt.js");

passport.use(
  "local-login",
  new LocalStrategy(async (email, password, done) => {
    try {
      console.log("Logging in~~");
      let users = await knex("users").where({ email: email });
      if (users.length == 0) {
        return done(null, false, { message: "Incorrect User" });
      }
      let user = users[0];
      let result = await bcrypt.checkPassword(password, user.password);
      if (result) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect username or password" });
      }
    } catch (err) {
      done(err);
    }
  })
);

passport.use(
  "local-signup",
  new LocalStrategy(async (email, password, done) => {
    try {
      let users = await knex("users").where({ email: email });
      if (users.length > 0) {
        return done(null, false, { message: "Email in use... " });
      }
      // add hash later

      let hash = await bcrypt.hashPassword(password);

      const newUser = {
        email: email,
        password: hash,
      };

      let userID = await knex("users").insert(newUser).returning("id");
      newUser.id = userID[0];
      done(null, newUser);
    } catch (err) {
      done(err);
    }
  })
);


passport.serializeUser((user, done) => {
  done(null, user);
});

// Normal passport
passport.deserializeUser((user, done) => {
  done(null, user);
});

// passport facebook


app.use("/", router);



// non facebook app
app.listen(8080, () => {
  console.log("Application listening to port 8080");
});

