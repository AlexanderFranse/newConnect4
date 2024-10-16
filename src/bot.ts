export function columnForBotToDropDisc(): number {
  const allowedColumns = [0, 1, 2, 3, 4, 5, 6];
  return allowedColumns[Math.floor(Math.random() * allowedColumns.length)];
}
