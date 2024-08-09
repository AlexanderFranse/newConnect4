type Cell = 0 | 1 | 2; // 0 for empty, 1 for player 1, 2 for player 2
type Board = Cell[][];

export function newBoard(): Board {
    const rows = 6;
    const cols = 7;
    
    // Create a 2D array filled with zeros (empty cells)
    return Array(rows).fill(null).map(() => Array(cols).fill(0));
}

export function newPlayer(): string {
  return "🔴";
}