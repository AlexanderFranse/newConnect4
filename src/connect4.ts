export const player1 = "🔴";
export const player2 = "🟡";
export const empty = "⚪️"
export type Cell = typeof empty | typeof player1 | typeof player2;
export type Board = Cell[][];


export function newBoard(): Board {
  const rows = 6;
  const cols = 7;
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(empty));
}

export const newGameId = (): string => {
  return Math.random().toString(36).substring(2, 15);
}

export function startNewGame(): { board: Board; gameId: string } {
  return { board: newBoard(), gameId: newGameId() };
}

export function dropDisc(board: Board, column: number, disc: number): Board {
  const cell = disc === 1 ? player1 : player2;
  const updatedBoard = board;
  for (let i = board.length - 1; i >= 0; i -= 1) {
    if (board[i][column] === empty) {
      updatedBoard[i][column] = cell;
      break;
    }
  }
  return updatedBoard;
}

export function isValidColumn(column: number): boolean {
  return column >= 0 && column < 7;
}

export function isColumnFull(board: Board, column: number): boolean {
  return board[0][column] !== empty;
}

export function makeMove(board: Board, column: number): Board{
  // dropDisc
  // check the victory case
  // if not turn player
  const player1 = 1
  const player2 = 2
 let updatedBoard = dropDisc(board, column, player1);
 const botColumn= columnForBotToDropDisc()
 return dropDisc(updatedBoard, botColumn, player2)

}

export function columnForBotToDropDisc(): number {
  const allowedColumns = [0, 1, 2, 3, 4, 5, 6];
  return allowedColumns[Math.floor(Math.random() * allowedColumns.length)];
}
