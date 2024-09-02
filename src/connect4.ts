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

export function dropDisc(gameId:string, column: number): Board{
return newBoard();
}

// export function dropDisc(board: Board, player: Cell, column: number): Board {
//   const boardCopy = board.map((row) => [...row]);
//   for (let row = boardCopy.length - 1; row >= 0; row -= 1) {
//     if (boardCopy[row][column] === 0) {
//       boardCopy[row][column] = player;
//       return boardCopy;
//     }
//   }
//   throw new Error("Column full!");
// }

// export function checkForHorizontalVictory(
//   board: Board,
//   currentPlayer: Cell
// ): boolean {
//   for (let row = 0; row < board.length; row += 1) {
//     let count = 0;
//     for (let col = 0; col < board[row].length; col += 1) {
//       const cell = board[row][col];
//       if (cell === currentPlayer && cell !== 0) {
//         count += 1;
//         if (count === 4) {
//           return true;
//         }
//       } else {
//         count = 0;
//       }
//     }
//   }
//   return false;
// }

// export function makeMove(board: Board, currentPlayer: Cell, column: number) {
//   const updatedBoard = dropDisc(board, currentPlayer, column);
//   if (checkForHorizontalVictory(updatedBoard, currentPlayer)) {
//     console.log("Player 1 wins!");
//     return updatedBoard;
//   }
//   return updatedBoard;
// }
