import { newBoard, newGameId } from "../../src/connect4";

describe("Connect4 is a game which is played on a board", () => {
  describe("When we set up the game, the game..", () => {
    it("should have 7 columns and 6 rows, filled with zeroes", () => {
      const board = newBoard();
      expect(board.length).toEqual(6);
      expect(board[0].length).toEqual(7);
      board.forEach((row) => {
        row.forEach((cell) => {
          expect(cell).toEqual(0);
        });
      });
    });
    it("should have a random number as a game id", () => {
      const gameId = newGameId();
      expect(gameId).toBeDefined();
      expect(typeof gameId).toEqual("string");
    });
  });
  describe("When a player1 drops a disc in X column", () => {
    it("Given the X column has avivalbe spcase for a new disc then the disc will be dropped in the x column ", () => {});
    it("Given the X column has no avivalbe spcase for a new disc then show column full! message", () => {});
    it("Given the X column in out of bounderies then show out of bounderies! message", () => {});
  });
});
