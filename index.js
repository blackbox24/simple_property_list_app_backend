const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const sequelize = require("./config/dbconf");

// Define a simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to the application." });    
// });
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(
    port, ()=>{
        console.log("Server is running on port " + port);
    }
)