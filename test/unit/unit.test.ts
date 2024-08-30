import exp from "constants";
import { newBoard, newGameId, player1,player2 } from "../../src/connect4";
import { emptyConnect4GameBoard, gameBoardAlmostHorizontalVictoryOnBottomRow, gameBoardFourRedDiscsButNotConsecutive, gameBoardHorizontalVictoryForPlayerTwoMiddleRow, gameBoardHorizontalVictoryOnBottomRow, gameBoardInProgress, gameBoardThirdColumnFull } from "../doubles/double";

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
});
//     it("should have player 1 play with the red disc", () => {
//       expect(player1).toEqual("🔴");
//     });
//     it("should have player 2 play with the yellow disc", () => {
//       expect(player2).toEqual("🟡");
//     });

//     describe("When we have set up the game, we are ready to play!", () => {
//       it("When player 1 drops his disc in the first column, it should fall to the bottom of the column.", () => {
//         const board = emptyConnect4GameBoard;
//         const firstColumn = 0;
//         const updatedBoard = dropDisc(board, player1, firstColumn);

//         expect(updatedBoard[5][0]).toEqual(player1);
//       });

//       it("When player 2 drops his disc in the first column, it should fall to the bottom of the column.", () => {
//         const board = emptyConnect4GameBoard;
//         const firstColumn = 0;
//         const updatedBoard = dropDisc(board, player2, firstColumn);

//         expect(updatedBoard[5][0]).toEqual(player2);
//       });

//       it("When a disc is dropped in a column that already contains 3 discs, it should fall on top of the other discs.", () => {
//         const board = gameBoardInProgress;
//         const thirdColumn = 2;
//         const updatedBoard = dropDisc(board, player1, thirdColumn);

//         expect(updatedBoard[2][2]).toEqual(player1);
//       });

//       it("When a disc is dropped in a column that is full, it should return an error.", () => {
//         const board = gameBoardThirdColumnFull;
//         const thirdColumn = 2;

//         expect(() => dropDisc(board, player1, thirdColumn)).toThrow("Column full!");
//       });
//     });

//     describe("During play, we need to check for a horizontal victory", () => {
//       it("When the board is empty, there is no horizontal victory", () => {
//         const board = emptyConnect4GameBoard;
//         const currentPlayer = player1;
//         expect(checkForHorizontalVictory(board, currentPlayer)).toBe(false);
//       });
//       it("When there are 3 discs in a row for player 1, there is not yet a horizontal victory", () => {
//         const board = gameBoardAlmostHorizontalVictoryOnBottomRow;
//         const currentPlayer = player1;
//         expect(checkForHorizontalVictory(board, currentPlayer)).toBe(false);
//       });
//       it("When there are 4 red discs in a row, but not consecutive, there is no horizontal victory", () => {
//         const board = gameBoardFourRedDiscsButNotConsecutive;
//         const currentPlayer = player1;
//         expect(checkForHorizontalVictory(board, currentPlayer)).toBe(false);
//       });
//       it("When there are 4 discs in a row for player 1, there is a horizontal victory", () => {
//         const board = gameBoardHorizontalVictoryOnBottomRow;
//         const currentPlayer = player1;
//         expect(checkForHorizontalVictory(board, currentPlayer)).toBe(true);
//       });
//       it("When there are 4 discs in a row for player 2, there is a horizontal victory", () => {
//         const board = gameBoardHorizontalVictoryForPlayerTwoMiddleRow;
//         const currentPlayer = player2;
//         expect(checkForHorizontalVictory(board, currentPlayer)).toBe(true);
//       });
//     });
//   });
// });
