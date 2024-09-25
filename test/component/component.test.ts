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
    const { gameId } = newGame;
    const updatedGame = makeMove(gameId, newGame.board, column);
    expect(updatedGame).toBeDefined();
    expect(updatedGame.board.some((row) => row.includes("🔴"))).toBe(true);
    expect(updatedGame.board.some((row) => row.includes("🟡"))).toBe(true);
    expect(updatedGame.gameId).toBe(gameId);
    expect(updatedGame.status).toBe("IN_PROGRESS");
  });
});
