import express from "express";
import { dropDisc, newGameId, startNewGame } from "./connect4";

const app = express();
const port = 3000;

app.get("/game/new", (req, res) => {
  const newGame = startNewGame();
  res.json({ board: newGame.board, gameId: newGameId() });
});

app.post("/game/dropDisc", (req, res) => {
  const { board, column} = req.body;
  const updatedBoard = dropDisc(board, column);
  res.json({ board: updatedBoard});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
