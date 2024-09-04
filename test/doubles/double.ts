import { Board } from "../../src/connect4";

export const emptyConnect4GameBoard: Board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

export const gameBoardInProgress: Board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 2, 1, 2, 0, 0, 0],
  [1, 2, 1, 2, 0, 0, 0],
  [1, 2, 1, 2, 0, 0, 0],
];

export const gameBoardThirdColumnFull: Board = [
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [1, 2, 2, 1, 2, 1, 2],
  [2, 1, 1, 2, 1, 2, 1],
  [1, 2, 2, 1, 2, 1, 2],
];

export const gameBoardAlmostHorizontalVictoryOnBottomRow: Board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 2, 0],
];

export const gameBoardHorizontalVictoryOnBottomRow: Board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 2, 0],
];

export const gameBoardFourRedDiscsButNotConsecutive: Board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [1, 1, 2, 1, 1, 0, 0],
];

export const gameBoardHorizontalVictoryForPlayerTwoMiddleRow: Board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [2, 2, 2, 2, 1, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [1, 1, 2, 1, 1, 0, 0],
];