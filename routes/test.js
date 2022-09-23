import express from "express";
import { db } from "../config/db.js";

const router = express.Router();
router.get("/test", async (_, res) => {
  try {
    const sqlQuery = "SELECT * FROM Product";
    db.query(sqlQuery, function (err, result) {
      if (err) throw err;
      
      return res.status(200).json({
        data: result
    });
    } catch (error) {
    return res.status(400).json({
      // error.message,
      message: "An error occured in the backend"
    });
  }
});

export default router;
