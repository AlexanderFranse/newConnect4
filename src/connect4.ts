type Cell = "" | "🔴" | "🟡";
type Board = Cell[][];

export function newBoard(): Board {
  const rows = 6;
  const cols = 7;

  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(""));
}

export function newPlayer(player: number): string {
  if (player === 1) {
    return "🔴"; // Red disc for player 1
  }
  if (player === 2) {
    return "🟡"; // Yellow disc for player 2
  }
  throw new Error("Invalid player number. Must be 1 or 2.");
}

export function dropDisc(board: Cell[][], player: string, column: number) {
  board[5][6] = "🔴";
  return board
}