import { dropDisc, startNewGame } from "../../src/connect4";

describe("It should be possible to start a new game", () => {
  it("And when this is done, an empty game board and a game id should be returned", () => {
    const newGame = startNewGame();

    expect(newGame.board).toBeDefined();
    expect(newGame.gameId).toBeDefined();
  });
});
describe("User dropDisc in X column",()=>{
it("Should put a disc in the X column and return the updated board",()=>{
  const newGame = startNewGame();
  const column = 0;
  const updatedBoard = dropDisc(newGame.gameId, column);
  expect(updatedBoard).toBeDefined();
});
});
