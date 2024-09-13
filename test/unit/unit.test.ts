import { describe } from "node:test";
import {
  columnForBotToDropDisc,
  dropDisc,
  isColumnFull,
  isValidColumn,
  newBoard,
  newGameId,
} from "../../src/connect4";
import {
  gameBoardInProgress,
  gameBoardThirdColumnFull,
} from "../doubles/double";

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
    describe("You have to drop a disc in a column that is not yet full. We check if it is", () => {
      it("empty", () => {
        const board = newBoard();
        const column = 0;
        expect(isColumnFull(board, column)).toBe(false);
      });
      it("not full", () => {
        const board = gameBoardInProgress;
        const column = 0;
        expect(isColumnFull(board, column)).toBe(false);
      });
      it("full", () => {
        const board = gameBoardThirdColumnFull;
        const column = 2;
        expect(isColumnFull(board, column)).toBe(true);
      });
    });
    describe("Dropping a disc...", () => {
      it("in the first column should return the updated board", () => {
        const board = newBoard();
        const column = 0;
        const updatedBoard = dropDisc(board, column);
        expect(updatedBoard).toBeDefined();
        expect(updatedBoard[5][0]).toEqual(1);
      });
      it("in the last column should return the updated board", () => {
        const board = newBoard();
        const column = 6;
        const disc = 2;
        const updatedBoard = dropDisc(board, column, disc);
        expect(updatedBoard).toBeDefined();
        expect(updatedBoard[5][6]).toEqual(disc);
      });
      it("in a column that already contains 3 discs should show the disc falling on top of the previous disc", () => {
        const board = gameBoardInProgress;
        const column = 0;
        const updatedBoard = dropDisc(board, column);
        expect(updatedBoard).toBeDefined();
        expect(updatedBoard[2][0]).toEqual(1);
      });
    });
    describe("A bot should be able to make a move", () => {
      describe("It should pick a random column between 0 and 6", () => {
        it("between 0 and 6 is a good idea", () => {
          const result = columnForBotToDropDisc();
          expect(result).toBeGreaterThanOrEqual(0);
          expect(result).toBeLessThanOrEqual(6);
        });
      });
    });
  });
});
