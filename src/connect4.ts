export type Cell = "" | "🔴" | "🟡";
export type Board = Cell[][];
export const player1 = "🔴";
export const player2 = "🟡";

export function newBoard(): Board {
  const rows = 6;
  const cols = 7;
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(""));
}

export function dropDisc(board: Board, player: Cell, column: number): Board {
  const boardCopy = board.map((row) => [...row]);
  for (let row = boardCopy.length - 1; row >= 0; row -= 1) {
    if (boardCopy[row][column] === "") {
      boardCopy[row][column] = player;
      break;
    }
  }
  return boardCopy;
}
