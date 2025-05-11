const Sequelize = require("sequelize");
require("dotenv").config();

// Option 3: Passing parameters separately (other dialects)


const sequelize = process.env.NODE_ENV === "production" ? new Sequelize(process.env.MYSQL_PUBLIC_URL) : new Sequelize(
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
module.exports = sequelize;