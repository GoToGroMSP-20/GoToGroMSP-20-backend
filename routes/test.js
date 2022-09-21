import express from "express";
import { db } from "../config/db.js";

const router = express.Router();
router.get("/test", async (_, res) => {
  try {
    const sqlQuery = "SELECT * FROM Product";
    db.query(sqlQuery, function (err, result) {
      if (err) throw err;
      db.end();
      
      return res.status(200).json({
        status: 200,
        data: result
      });
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      // data: error.message,
      data: "An error occured in the backend"
    });
  }
});

export default router;
