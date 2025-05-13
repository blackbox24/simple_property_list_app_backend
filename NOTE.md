## SIMPLE PROPERTY LISTING APPLICATION

#### FEATURE 1
- Property listings api
    - list all home with their images, names, location and prices
    - Acceptancce criteria (Gherkin)


- Create your project directory 
```sh
mkdir simple-property-list
cd simple-property-list
```

- Initialize the project with `npm init`

- Modify package.json file in root directory
```json
{
    "name":"simple-property-list",
    "version":"0.0.1",
    "description":"",
    "main": "index.js",
    "scripts":{
        "start":"node index.js"
    },
    "author":"",
    "license":"ISC",
}
```
- Install all production packages
```sh
npm i sequelize mysql2 express cors dotenv
npm i --save sequelize-cli

```

- Install all development packages 
```sh
npm i nodemon
```

- Initalize sequelize setup by typing `npx sequelize-cli init`

- Create index.js and paste following code in it
```js
const express = require("express");
const app = express();
const port = process.env.PORT | 3000;

app.get("/",(req,resp)=>{
    resp.send("Hello world");
})


app.listen(
    port,()=>{
        console.log(`Server running on port ${port}`);
    }
)
```

- Run `npm start` in your terminal and access `127.0.0.1:3000` in your browser. You should see "hello world"

- Create your database using MYSQL cli
```sh
mysql -u root -p
```

- Create app's database
```sh
CREATE DATABASE simple_property_db_test;
```

- Verify database creation
```sh
SHOW DATABASES;
```
- Create `.env` file and paste all environmental variables inside such as
```env
    PORT=3000
    DBNAME=root
    DBHOST=localhost
    DATABASE=test_db
    DBPASSWORD=2001
    DBPORT=3306

    NODE_ENV="development"
``` 

- Inside config directory create a file called `dbconf.js` and paste
```js
const Sequelize = require("sequelize");
require("dotenv").config();

const env = process.env;

const sequelize = new Sequelize(
 env.DATABASE,
 env.DBNAME,
 env.DBPASSWORD,
  {
    host: env.DBHOST,
    dialect: 'mysql'
  }
);
```

- Write a promise-base authenication method to instantiate the database connection to the application. Modify the `index.js` with db authentication implementation
```js
sequelize.authenticate().then(()=>{
    console.log("Connection has been successfully established");
}).catch((error)=>{
    console.error("Unable to connect to database", error);
})
```

- Write our model
```js
const {DataTypes} require("sequelize");
const sequelize = require("../config/dbconfig.js");

const Property = sequelize.define("Property",{
    id:{
        type:DataType.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataType.STRING,
        allowNull:true
    },
    price:{
        type:DataType.DECIMAL(10,2),
        allowNull:false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
    }, {
  tableName: 'properties'
});

module.exports = Property;
```

- Run `npx sequelize-cli migration:generate --name proptery`  to create migration file

- Run `npx sequelize-cli db:migrate` to migrate data to database

- Create controller director for Controller functions

- Create routers directory for Property routes

- Use routes in index.js

Xcelsz Alongboarding Backend
This is the backend for the Xcelsz Alongboarding process, built with Express and MySQL. It supports the 6-step alongboarding journey, including application submission, role challenges, and trial runs.
Prerequisites

Node.js (v16 or higher)
MySQL (v8 or higher)
Postman (for testing APIs)

Installation

Clone the repository:git clone https://github.com/xcelsz/alongboarding-backend.git
cd alongboarding-backend


Install dependencies:npm install


Create a .env file in the root directory and add the following:DATABASE_HOST=localhost
DATABASE_USER=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=alongboarding_db
PORT=3000



Database Setup

Create the MySQL database:CREATE DATABASE alongboarding_db;


Run the schema and migrations:npm run migrate

This sets up tables for applications, challenges, and trial runs.

Running the Server
Start the backend server:
npm start

The server will run on http://localhost:3000.
Testing

Import the Postman collection (Xcelsz Alongboarding Backend API.postman_collection.json) into Postman.
Setองชั่ว дняSet the baseUrl variable to http://localhost:3000.
Test the following endpoints:
POST /api/applications: Submit a new application.
GET /api/applications/:id: Retrieve application details.
POST /api/challenges: Submit a challenge.
GET /api/challenges/:id: Retrieve challenge details.
POST /api/trial-runs: Log trial run feedback.



Project Structure

src/: Source code
routes/: API route handlers
models/: MySQL database models
controllers/: Business logic
config/: Database and environment config


migrations/: Database schema and migrations

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/new-feature).
Commit changes (git commit -m "Add new feature").
Push to the branch (git push origin feature/new-feature).
Create a Pull Request.

