import express from "express";

const app = express();
const port = 6363;

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {});
