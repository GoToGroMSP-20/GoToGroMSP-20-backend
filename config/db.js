import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.NODE_ENV === "production" ? process.env.PROD_DB_HOST : process.env.DEV_DB_HOST,
  user: process.env.NODE_ENV === "production" ? process.env.PROD_DB_USER : process.env.DEV_DB_USER,
  password: process.env.NODE_ENV === "production" ? process.env.PROD_DB_PASSWORD : process.env.DEV_DB_PASSWORD,
  database: process.env.NODE_ENV === "production" ? process.env.PROD_DB : process.env.DEV_DB
});
