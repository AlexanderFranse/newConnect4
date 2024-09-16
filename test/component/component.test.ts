import { makeMove, startNewGame } from "../../src/connect4";

describe("It should be possible to start a new game", () => {
  it("And when this is done, an empty game board and a game id should be returned", () => {
    const newGame = startNewGame();

    expect(newGame.board).toBeDefined();
    expect(newGame.gameId).toBeDefined();
  });
});

describe("An other feature is making a move", () => {
  it("Making a move entails dropping the users disc and executing a bot move.", () => {
    const newGame = startNewGame();
    const column = 0;
    const updatedGameBoard = makeMove(newGame.board, column);
    expect(updatedGameBoard).toBeDefined();
    expect(updatedGameBoard.some((row) => row.includes("🔴"))).toBe(true);
    expect(updatedGameBoard.some((row) => row.includes("🟡"))).toBe(true);
  });
});
