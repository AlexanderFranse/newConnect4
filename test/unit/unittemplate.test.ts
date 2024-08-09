import { newBoard, newPlayer } from "../../src/connect4";

describe("Connect4 is a game which is played on a board", () => {
  it("should have 7 columns and 6 rows", () => {
    const board = newBoard();
    expect(board.length).toEqual(6);
    expect(board[0].length).toEqual(7);
  });
  it("should have player 1 play with the red disc", () => {
    const player1 = newPlayer()
    expect(player1).toEqual("🔴");
  });
});
