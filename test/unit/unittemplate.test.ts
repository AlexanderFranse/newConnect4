import { newBoard, player1,player2, dropDisc } from "../../src/connect4";

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
        const board = newBoard();
        const columnToDropTheDiscIn = 0;
        dropDisc(board, "🔴", columnToDropTheDiscIn);

        expect(board[5][6]).toEqual("🔴");
      });

      it("When player 2 drops his disc in the first column, it should fall to the bottom of the column.", () => {
        const board = newBoard();
        const columnToDropTheDiscIn = 0;
        dropDisc(board, "🟡", columnToDropTheDiscIn);

        expect(board[5][6]).toEqual("🔴");
      });
    });
  });
});
