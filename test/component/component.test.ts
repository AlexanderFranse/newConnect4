import { dropDisc, makeMove, startNewGame } from "../../src/connect4";

describe("It should be possible to start a new game", () => {
  it("And when this is done, an empty game board and a game id should be returned", () => {
    const newGame = startNewGame();

    expect(newGame.board).toBeDefined();
    expect(newGame.gameId).toBeDefined();
  });
});
describe("An other feature is dropping a disc in a column and making your move", () => {
  it("A player should be able to drop his disc in a column, triggering a bot move afterwards, returning the current game state including the ID", () => {
    const newGame = startNewGame();
    const column = 0;
    const updatedGameState = makeMove(newGame.gameId, newGame.board, column);
    expect(updatedGameState).toBeDefined();
    expect(updatedGameState.gameId).toEqual(newGame.gameId);
    expect(updatedGameState.board).toBeDefined();
  });
});
