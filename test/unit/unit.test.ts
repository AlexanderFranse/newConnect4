import { newBoard, player1,player2, dropDisc } from "../../src/connect4";
import { emptyConnect4GameBoard, gameBoardInProgress } from "../doubles/double";

describe("Connect4 is a game which is played on a board", () => {
  describe("When we set up the game, the game..", () => {
    it("should have 7 columns and 6 rows", () => {
      const board = newBoard();
      expect(board.length).toEqual(6);
      expect(board[0].length).toEqual(7);
    });
    it("should have player 1 play with the red disc", () => {
      expect(player1).toEqual("🔴");
    });
    it("should have player 2 play with the yellow disc", () => {
      expect(player2).toEqual("🟡");
    });

    describe("When we have set up the game, we are ready to play!", () => {
      it("When player 1 drops his disc in the first column, it should fall to the bottom of the column.", () => {
        const board = emptyConnect4GameBoard;
        const firstColumn = 0;
        const updatedBoard = dropDisc(board, player1, firstColumn);

        expect(updatedBoard[5][0]).toEqual(player1);
      });

      it("When player 2 drops his disc in the first column, it should fall to the bottom of the column.", () => {
        const board = emptyConnect4GameBoard;
        const firstColumn = 0;
        const updatedBoard = dropDisc(board, player2, firstColumn);

        expect(updatedBoard[5][0]).toEqual(player2);
      });

      it("When a disc is dropped in a column that already contains 3 discs, it should fall on top of the other discs.", () => {
        const board = gameBoardInProgress;
        const thirdColumn = 2;
        const updatedBoard = dropDisc(board, player1, thirdColumn);

        expect(updatedBoard[2][2]).toEqual(player1);
      });
    });
  });
});
