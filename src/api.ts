import express from "express";
import { dropDisc, makeMove, newGameId, startNewGame } from "./connect4";

const app = express();
const port = 3000;

app.get("/game/new", (req, res) => {
  const newGame = startNewGame();
  res.json({ board: newGame.board, gameId: newGameId() });
});

app.post("/game/dropDisc", (req, res) => {
  const { gameId, board, column } = req.body;

  // Validate request body
  if (!gameId || !board || column === undefined || column < 0 || column > 6) {
    return res.status(400).json({ error: "Invalid request data" });
  }

  try {
    const updatedGame = makeMove(board, column);
    res.json(updatedGame);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while dropping the disc" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
