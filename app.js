const express = require("express");
const session = require('express-session');
const app = express();
const cors = require("cors");
const bodyPaser = require('body-parser');
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session);


// require package for mongodb
require("dotenv/config");
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());



// path for different page and database connections
const routeCourses = require("./routes/courses");
const routeUsers = require("./routes/userInfo");
const routeGallery = require("./routes/gallery");
const routeRecipes = require("./routes/recipes");
const routeSubstitute = require("./routes/substitute");

// const routeVerification = require("./routes/routes");


const Recipes = require("./models/Recipes");

// Middleware
app.use(cors());
app.use("/api/courses", routeCourses);
app.use("/api/userInfo", routeUsers);
app.use("/api/gallery", routeGallery);
app.use("/api/recipes", routeRecipes);
app.use("/api/substitution", routeSubstitute);

// app.use("/api/verification", routeVerification);
app.use('/api/verify', require('./routes/routes.js'));

// homepage
//app.get("/", (req,res) => {
  //  res.send("we are on 5000 homepage")
//});


// connect to mongoose
mongoose.connect(
     process.env.DB_CONNECTION, 
    {useNewUrlParser:true},
     () =>console.log("database is conncted")    
)

// variable for connecting to mongoose dataset for maintain login status
var conn = mongoose.connection;

conn.on('connected',() =>{
    console.log('MongoDB connected')
});

conn.on('error',(err)=>{
    if(err)
    console.log(err)
});


app.use(session({
    secret: 'ssshhhhh',
    saveUninitialized: false,
    resave: true,
    store: new MongoStore({
        mongooseConnection: conn
    })
}));

app.get('/', function(req, res){
    if (req.session.userId != undefined || null) {
      res.redirect('/home');
    } else {
      res.send('Username'+
      'Password'+
         'Login'+
       '');}
  })
  
  app.post('/login', function (req, res, next) {
      if (req.body.username && req.body.password) {
       User.authenticate(req.body.username, req.body.password, function (error, user) {
         if (error || !user) {
           var err = new Error('Some error occured!');
           err.status = 401;
           return next(err.message);
         } else {
         //res.send(user);
         req.session.userId = user.userid;
         res.redirect('/home');
         }
       });
     } else {
       var err = new Error('Something went wrong!');
       err.status = 400;
       return next(err.message);
     }
   });
  
   app.get('/home',(req , res)=>{
    if (req.session.userId != undefined || null){
     res.send('Welcome to HOME Page!User Session Details:'+JSON.stringify(req.session)+''+
     'Logout');
    } else {
      res.redirect('/');
    }
   })
  
   // GET for logout logout
   app.get('/logout', function (req, res, next) {
    if (req.session.userId) {
      // delete session object
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });

// setport
const PORT = process.env.PORT  || 3456;

app.listen(PORT, () => console.log(`listening on ${PORT}`));