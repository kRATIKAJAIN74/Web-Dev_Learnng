const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/rolldice", (req,res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
   const instaData = require("./data.json");
   const data = instaData[username];
   console.log(data);
    res.render("instagram.ejs", { data});
});


app.get("/hello", (req,res) => {
    res.render("hello");
});

app.get("/roledice", (req,res) => {
    res.render("hello");
});


app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
});