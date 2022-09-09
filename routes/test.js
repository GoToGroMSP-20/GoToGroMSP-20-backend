import express from "express";

const router = express.Router();
router.get("/test", async (req, res) => {
  const message = "I just wanted to say, 'Have a naice day :D'";
  const randomSuccess = Math.random() < 0.5;
  try {
    if (randomSuccess) {
      return res.status(200).json({
        status: 200,
        data: message
      });
    }
    return res.status(400).json({
      status: 400,
      data: "A literally random error occured"
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      data: "An error occured in the backend"
    });
  }
});

export default router;