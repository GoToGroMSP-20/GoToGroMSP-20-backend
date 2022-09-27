import express from "express";
import { db } from "../config/db.js";

const router = express.Router();
router.post("/getorder", async (req, res) => {
  try {
    const { email, mobile } = req.body;
    const sqlQuery = `SELECT T.transaction_id, T.date_purchased, '$' + P.price * TO.quantity AS 'Total' 
                    from TransactionOrder AS TO JOIN Transaction AS T
                    ON TO.transaction_id= T.transaction_id
                    JOIN Product AS P
                    ON TO.product_id = p.product_id
                    JOIN Member AS M
                    ON T.member_id = M.member_id
                    WHERE M.email == email OR M.mobile == mobile VALUES (?, ?) 
                    GROUP BY TO.transaction_id
                    ;`;
    db.query(
      sqlQuery,
      [lastName, firstName, dob, email, mobile],
      function (err, _) {
        if (err) throw err;

        return res.status(200);
      }
    );
  } catch (error) {
    return res.status(400).json({
      // message: error.message,
      message: "An error occured in the backend",
    });
  }
});
export default router;
