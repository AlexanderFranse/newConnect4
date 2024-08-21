import { Board, player1, player2 } from "../../src/connect4";

export const emptyConnect4GameBoard: Board = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

export const gameBoardInProgress: Board = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  [player1, player2, player1, player2, "", "", ""],
  [player1, player2, player1, player2, "", "", ""],
  [player1, player2, player1, player2, "", "", ""],
];

export const gameBoardThirdColumnFull: Board = [
  ["", "", player1, "", "", "", ""],
  ["", "", player2, "", "", "", ""],
  ["", "", player1, "", "", "", ""],
  [player1, player2, player2, player1, player2, player1, player2],
  [player2, player1, player1, player2, player1, player2, player1],
  [player1, player2, player2, player1, player2, player1, player2],
];