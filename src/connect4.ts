export type Cell = 0 | 1 | 2;
export type Board = Cell[][];
export const player1 = "🔴";
export const player2 = "🟡";

export function newBoard(): Board {
  const rows = 6;
  const cols = 7;
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0));
}

export const newGameId = (): string => {
  return Math.random().toString(36).substring(2, 15);
}

export function startNewGame(): { board: Board; gameId: string } {
  return { board: newBoard(), gameId: newGameId() };
}

export function dropDisc(board: Board, column: number): Board {
  const updatedBoard = board;
  for (let i = board.length - 1; i >= 0; i -= 1) {
    if (board[i][column] === 0) {
      updatedBoard[i][column] = 1;
      break;
    }
  }
  return updatedBoard;
}

export function isValidColumn(column: number): boolean {
  return column >= 0 && column < 7;
}

export function isColumnFull(board: Board, column: number): boolean {
  return board[0][column] !== 0;
}

export function makeMove(board: Board, column: number): Board{
  // dropDisc
  // check the victory case
  // if not turn player
 return dropDisc(board, column);
}