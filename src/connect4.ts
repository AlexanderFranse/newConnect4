type Cell = "" | "🔴" | "🟡";
type Board = Cell[][];
export const player1 = "🔴";
export const player2 = "🟡";

export function newBoard(): Board {
  const rows = 6;
  const cols = 7;

  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(""));
}

export function dropDisc(board: Cell[][], player: string, column: number) {
  board[5][6] = "🔴";
  return board
}