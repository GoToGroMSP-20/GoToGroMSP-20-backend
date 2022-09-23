import express from "express";
import { db } from "../config/db.js";

const router = express.Router();
router.post("/addmember", async (req, res) => {
  try {
    let lastName = req.body.lastName;
    let firstName = req.body.firstName;
    let dob = req.body.dob;
    let email = req.body.email;
    let mobile = req.body.mobile;
    const sqlQuery =
      "INSERT INTO Member (lastName, firstName, dob, email, mobile) VALUES ('lastName', 'firstName', 'dob', 'email', 'mobile');";
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
