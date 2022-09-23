import express from "express";
import { db } from "../config/db.js";

const router = express.Router();
router.post("/addorder", async (req, res) => {
  try {
    let transaction_id = req.body.transaction_id;
    let member_id = req.body.member_id;
    let date_purchased = req.body.date_purchased;
    const sqlQuery =
      "INSERT INTO Transaction (transaction_id, member_id, date_purchased) VALUES ('transaction_id', 'member_id', 'date_purchased');";
    db.query(sqlQuery, function (err, result) {
      if (err) throw err;
      db.end();

      return res.status(200).json({
        status: 200,
      });
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      // data: error.message,
      data: "An error occured in the backend",
    });
  }
});
export default router;
