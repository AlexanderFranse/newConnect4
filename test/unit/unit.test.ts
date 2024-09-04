import { isValidColumn, newBoard, newGameId } from "../../src/connect4";

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
  describe("One of the main features is dropping a disc in a column", () => {
    describe("You have to drop a disc in an existing column", () => {
      it("should throw an error if the column does not exist", () => {
        const column = 7;

        expect(isValidColumn(column)).toBe(false);
      });
      it("should return true if the column exists", () => {
        const column = 0;
        expect(isValidColumn(column)).toBe(true);
      });
    });
  });
});
