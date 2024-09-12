import e from "express";
import { dropDisc, makeMove, startNewGame } from "../../src/connect4";

describe("It should be possible to start a new game", () => {
  it("And when this is done, an empty game board and a game id should be returned", () => {
    const newGame = startNewGame();

    expect(newGame.board).toBeDefined();
    expect(newGame.gameId).toBeDefined();
  });
});
describe("An other feature is making a move", () => {
  it("This starts with a player by dropping his disc in a column, returning the current game state including the ID", () => {
    const newGame = startNewGame();
    const column = 0;
    const updatedGameBoard = makeMove(newGame.board, column);
    expect(updatedGameBoard).toBeDefined();
  });
  it("And after that a bot should make his move on the board", () => {
    const newGame = startNewGame();
    const column = 0;
    const updatedGameBoard = makeMove(newGame.board, column);
    expect(updatedGameBoard).toContain(2);
  });
});
