import db from "../config/db.js";

export const signupUser = async (emailId, userName, hashedPassword) => {
  const query =
    "INSERT INTO users (emailId, userName, password) VALUES ($1, $2, $3) RETURNING *";
  const values = [emailId, userName, hashedPassword];
  const { rows } = await db.query(query, values);
  return rows[0];
};

export const loginUser = async (userName, password) => {
  const query = "SELECT * FROM users WHERE userName = $1";
  const values = [userName];
  const { rows } = await db.query(query, values);
  return rows[0];
};
