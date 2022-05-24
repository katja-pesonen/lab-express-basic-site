const express = require("express");
const app = express();
const path = require('path');

const expressLayouts = require('express-ejs-layouts')

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'public')));

 
app.get("/", (request, response, next) => response.render("home.ejs"));

app.get("/About", (request, response, next) => response.render("about.ejs"));

app.get("/Works", (request, response, next) => response.render("works.ejs"));

 




app.listen(3000, () => {console.log("listening on port 3000")});
