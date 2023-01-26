const express = require("express");
const session = require("express-session");


// express app
const app = express();

// for POST requests (Required)
app.use(express.urlencoded({ extended: true }));

// 
app.use(session({
    secret: "key that will sign cookie",
    resave : false,
    saveUninitialized : false,
}))

// Set view engine
app.set("view engine", "pug");

// Set views folder
app.set("views", "./views");

// Set static folder
app.use(express.static('./public'));


// Routes
app.use("/", require("./routers/login") )
app.use("/dashboard" , (req , res) =>{
    res.render("dashboard")
})

app.listen(4000)