import { dropDisc, startNewGame } from "../../src/connect4";

describe("It should be possible to start a new game", () => {
  it("And when this is done, an empty game board and a game id should be returned", () => {
    const newGame = startNewGame();

    expect(newGame.board).toBeDefined();
    expect(newGame.gameId).toBeDefined();
  });
});
describe("An other feature is dropping a disc in a column",()=>{
it("When a player drops a disc in a column, the disc should fall to the bottom of the column",()=>{
  const newGame = startNewGame();
  const column = 0;
  const updatedBoard = dropDisc(newGame.board, column);
  expect(updatedBoard).toBeDefined();
  expect(updatedBoard[5][0]).toEqual(1);
});
});
