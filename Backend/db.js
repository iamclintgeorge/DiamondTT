import pg, { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

const config = {
  host: process.env.host,
  password: process.env.password,
  user: process.env.user,
  database: process.env.db_name,
  port: process.env.db_port,
};

export const client = new pg.Client({ config });

client.connect((err, res) => {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Failed to connect with database");
  }
});
