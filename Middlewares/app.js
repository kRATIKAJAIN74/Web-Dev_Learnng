const express = require("express");
const app = express();

// app.use((req,res, next)=> {
//  console.log("Hii, I am 1st middleware");
//    next();
// });

// app.use((req,res, next)=> {
//  console.log("Hii, I am  2nd middleware");
//    next();
// });

const checkToken =  (req, res, next) => {
    let {token} = req.query;
    if(token =="giveaccess"){
     next();
    }
    res.send("ACCESS DENIED!");
    
};

app.get("/api", checkToken,(req, res)=> {
    res.send("data");
});


app.get("/", (req,res)=> {
    res.send("Hii, I am root.");
});

app.get("/random", (req,res)=> {
    res.send("This is a random page");
});

app.listen(8080, ()=> {
    console.log("server listening to port 8080");
});