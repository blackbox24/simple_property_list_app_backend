const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const sequelize = require("./config/dbconf");
const PropertyRoutes = require("./routers/PropteryRoutes.js");
const cors = require("cors");

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], // Replace with your client's origin
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", PropertyRoutes);

// Sync database
sequelize.sync({ force: false })
    .then(() => {
        console.log("Database & tables created!");
    })
    .catch((err) => {
        console.error("Error creating database & tables:", err);
    });


// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(
    port, ()=>{
        console.log("Server is running on port " + port);
    }
)