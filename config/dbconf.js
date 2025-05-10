const Sequelize = require("sequelize");
require("dotenv").config();

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  process.env.DBDATABASE,
  process.env.DBNAME,
  process.env.DBPASSWORD,
  {
    host: process.env.DBHOST,
    dialect: "mysql",
    logging: console.log,
    // dialectOptions: {
    //   ssl: {
    //     require: true, // This will ensure SSL is used
    //     rejectUnauthorized: false, // This helps with self-signed certificates
    //   },
    // },
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;