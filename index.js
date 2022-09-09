import express, { json } from "express";

const app = express();
const port = process.env.PORT || 4000;

const allowedOrigins = [
  "http://localhost:3000",
  "https://gotogromsp-20.github.io/GoToGroMSP-20/",
  "https://gotogro-msp20-test.herokuapp.com"
];

app.use(express.static("public"));
app.use(json());
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.set("Access-Control-Allow-Methods", "GET", "POST", "PATCH", "DELETE");
  res.set("Access-Control-Allow-Headers", "*");
  next();
});

app.listen(port, () => console.log(`Server is running on port ${port}`));