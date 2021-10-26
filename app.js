const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// require package for mongodb
require("dotenv/config");
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// path for different page and database connections
const routeCourses = require("./routes/courses");
const routeUsers = require("./routes/userInfo");
const routeGallery = require("./routes/gallery");
const routeRecipes = require("./routes/recipes");

// Middleware
app.use(cors());
app.use("/api/courses", routeCourses);
app.use("/api/userInfo", routeUsers);
app.use("/api/gallery", routeGallery);
app.use("/api/recipes", routeRecipes);

// homepage
app.get("/", (req,res) => {
    res.send("we are on 5000 homepage")
});


// connect to mongoose
mongoose.connect(
     process.env.DB_CONNECTION, 
    {useNewUrlParser:true},
     () =>console.log("database is conncted")    
);

// setport
const PORT = process.env.PORT  || 3456;

app.listen(PORT, () => console.log(`listening on ${PORT}`));