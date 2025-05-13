# Simple Property List Backend

This is the backend for the Simple Property List process, built with Express and MySQL. 

## Prerequisites
- Node.js (v16 or higher)
- MySQL (v8 or higher)
- Postman (for testing APIs)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/blackbox24/simple-property-lists-backend.git
   cd alongboarding-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```
   # Local DB
    PORT=3000
    DBNAME=root
    DBHOST=127.0.0.1
    DBDATABASE=simple_property_db
    DBPASSWORD=
    DBPORT=3306

    NODE_ENV="development"
   ```
4. Use the same configuration found in your .env in your config/config.json

## Database Setup
1. Create the MySQL database:
   ```sql
   CREATE DATABASE <database name>;
   ```
2. Run the schema and migrations:
   ```bash
   npm run migrate
   ```
   This sets up tables for properties, challenges, and trial runs.

3. Run the schema and seed:
    ```bash
    npm run seed
    ```

## Running the Server
Start the backend server:
```bash
npm start
```
The server will run on `http://localhost:3000` or `http://127.0.0.1:3000`

## Testing
1. Import the Postman collection (`Simple Property List.postman_collection.json`) into Postman. It can be found in test directory
2. Set the `baseUrl` variable to `http://localhost:3000`.
3. Test the following endpoints:
   - `POST /api/properties`: Submit a new property.
   - `GET /api/properties/:id`: Retrieve property details.
   - `GET /api/properties/`: Retrieve all properties.

## Project Structure
- `src/`: Source code
  - `routes/`: API route handlers
  - `models/`: MySQL database models
  - `controllers/`: Business logic
  - `config/`: Database and environment config
- `migrations/`: Database schema and migrations

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a Pull Request.