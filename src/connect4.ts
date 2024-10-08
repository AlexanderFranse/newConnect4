export const player1 = "🔴";
export const player2 = "🟡";
export const empty = "⚪️";
type PlayerDisc = typeof player1 | typeof player2;
export type Cell = typeof empty | typeof player1 | typeof player2;
export type Board = Cell[][];

enum Status {
  InProgress = "IN_PROGRESS",
  PlayerWon = "PLAYER_WON",
  BotWon = "BOT_WON",
  Draw = "DRAW",
}

export function newBoard(): Board {
  const rows = 6;
  const cols = 7;
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(empty));
}

export const newGameId = (): string =>
  Math.random().toString(36).substring(2, 15);

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

export function columnForBotToDropDisc(): number {
  const allowedColumns = [0, 1, 2, 3, 4, 5, 6];
  return allowedColumns[Math.floor(Math.random() * allowedColumns.length)];
}

export function makeMove(
  gameId: string,
  board: Board,
  column: number
): { gameId: string; board: Board; status: Status } {
  const player = 1;
  const bot = 2;
  let status = Status.InProgress
  const updatedBoardAfterPlayerMove = dropDisc(board, column, player);
  if(checkForHorizontalVictory(updatedBoardAfterPlayerMove,player1))
    status = Status.PlayerWon
  const botColumn = columnForBotToDropDisc();
  const updatedBoardAfterBotMove = dropDisc(
    updatedBoardAfterPlayerMove,
    botColumn,
    bot
  );
  if(checkForHorizontalVictory(updatedBoardAfterBotMove,player2))
    status = Status.BotWon
  return { gameId, board: updatedBoardAfterBotMove, status: status };
}

export function checkForHorizontalVictory(board: Board, disc: PlayerDisc): boolean {
  for (let row = 0; row < 6; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      if (
        board[row][col] === disc &&
        board[row][col + 1] === disc &&
        board[row][col + 2] === disc &&
        board[row][col + 3] === disc
      ) {
        return true;
      }
    }
  }
  return false;
};
        
