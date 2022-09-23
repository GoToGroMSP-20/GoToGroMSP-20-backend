import express from "express";
import { db } from "../config/db.js";

const router = express.Router();
router.post("/addorder", async (req, res) => {
  try {
    const {transaction_id, member_id, date_purchased} = req.body;
    const sqlQuery = "INSERT INTO Transaction (transaction_id, member_id, date_purchased) VALUES (?, ?, ?);";
    db.query(sqlQuery, [transaction_id, member_id, date_purchased], function (err, _) {
      if (err) throw err;
      db.end();

      return res.status(200);
    });
  } catch (error) {
    return res.status(400).json({
      // message: error.message,
      message: "An error occured in the backend",
    });
  }
});
export default router;
