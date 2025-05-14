const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const sequelize = require("./config/dbconf");
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Serve static files from media/uploads
app.use('/media/uploads', express.static(path.join(__dirname, 'media/uploads')));
app.use("/api", require("./routers/PropteryRoutes.js"));
app.use("/api/auth", require("./routers/AuthRoutes.js"));

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