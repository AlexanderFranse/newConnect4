import { gameBoardAlmostHorizontalVictoryOnBottomRow } from "../doubles/double";
import { player1, makeMove } from "../../src/connect4";

const mockLog = jest.fn();
console.log = mockLog;

describe("When a disc is dropped, we should check if there is a victory and print the winner if needed", () => {
  it("When player 1 drops his disc and he has four in a row, he should win", () => {
    const board = gameBoardAlmostHorizontalVictoryOnBottomRow;
    const currentPlayer = player1;
    makeMove(board, currentPlayer, 3);
    expect(mockLog).toHaveBeenCalledWith("Player 1 wins!");
  });
});
