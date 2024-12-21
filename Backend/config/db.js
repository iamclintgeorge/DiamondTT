import pkg from "pg"; // Import the CommonJS module as a default import
import dotenv from "dotenv";
dotenv.config();

const { Client } = pkg; // Destructure the `Client` from the imported package

const config = {
  host: process.env.host, // e.g., "localhost"
  user: process.env.user, // Your database username
  password: process.env.password, // Your database password
  database: process.env.db_name, // Your database name
  port: process.env.db_port, // PostgreSQL port, typically 5432
};

const db = new Client(config);

db.connect((err) => {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.error("Failed to connect to the database:", err.message);
  }
});

export default db;
