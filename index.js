const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const handlebars = require("express-handlebars");
const SearchRouter = require('./routers/searchRouter')
const SearchService = require('./services/searchService')
var hbs = handlebars.create({})

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


app.use(passport.initialize());
app.use(passport.session());

const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("./bcrypt.js");

passport.use(
  "local-login",
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },async (email, password, done) => {
    try {
      console.log("email,pw",email,password);
      console.log("Logging in~~");
      let users = await knex("users").where({ email: email });
      if (users.length == 0) {
        console.log("Incorrect User");
        return done(null, false, { message: "Incorrect User" });
      }

      let user = users[0];
      let result = await bcrypt.checkPassword(password, user.password);
      if (result) {
        console.log("res",result);
        return done(null, user);
      } else {
        console.log("Incorrect username or password");
        return done(null, false, { message: "Incorrect username or password" });
      }
    } catch (err) {
      done(err);
    }
  })
);

passport.use(
  "local-signup",
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },async (req, email, password, done) => {
    try {
      let users = await knex("users").where({ email: email });
      if (users.length > 0) {
        return done(null, false, { message: "Email in use... " });
      }
      // add hash later

      let hash = await bcrypt.hashPassword(password);

      const newUser = {
        email: email,
        username: req.body.username,
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


hbs.handlebars.registerHelper('eachUnique', function(array, options) {
  // this is used for the lookup
  var  dupCheck = {};
  // template buffer
  var buffer = '';
  for( var i=0; i< array.length; i++){
    var entry = array[i];
    var uniqueKey = entry.name + entry.introduction + entry.photo;
    // check if the entry has been added already
    if(!dupCheck[uniqueKey]){
      // here there are only unique values
      dupCheck[uniqueKey] = true;
      // add this in the template
      buffer += options.fn(entry);
    }
  }
  // return the template compiled
  console.log("buffer",buffer);
  return buffer;
});

app.use("/", router);


const searchService = new SearchService(knex)

app.use("/search", new SearchRouter(searchService).router())

// non facebook app
app.listen(8000, () => {
  console.log("Application listening to port 8080");
});

