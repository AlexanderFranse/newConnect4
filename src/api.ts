import express from "express";
import { newGameId, startNewGame } from "./connect4";

const app = express();
const port = 3000;

app.get("/game/new", (req, res) => {
  const newGame = startNewGame();
  res.json({ board: newGame.board, gameId: newGameId() });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
