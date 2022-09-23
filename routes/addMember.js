import express from "express";
import { db } from "../config/db.js";

const router = express.Router();
router.post("/addmember", async (req, res) => {
  try {
    const {lastName, firstName, dob, email, mobile} = req.body;
    const sqlQuery =
      `INSERT INTO Member (lastName, firstName, dob, email, mobile) VALUES (?, ?, ?, ?, ?);`;
    db.query(sqlQuery, [lastName, firstName, dob, email, mobile], function (err, result) {
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
