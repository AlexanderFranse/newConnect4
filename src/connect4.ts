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

export function startNewGame(): { board: Board; gameId: string | undefined } {
  return { board: newBoard(), gameId: newGameId() };
}

export function dropDisc(board: Board, column: number): Board {
  return board;
}

export function isValidColumn(column: number): boolean {
  return column >= 0 && column < 7;
}
