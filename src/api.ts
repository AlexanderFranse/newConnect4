import express from "express";

const app = express();
const port = 3000;

app.get("/game/new", (req, res) => {
  const emptyBoard = "hello world";
  res.json({ board: emptyBoard });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
