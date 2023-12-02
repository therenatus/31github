function numIslands(grid: string[][]): number {
  let counter: number = 0;
  const rowLen:number = grid.length;
  const colLen: number = grid[0].length;
  if(rowLen === 0) return 0;

  function markIsland (grid: string[][], row: number, col: number) {
    grid[row][col] = '8';
    if(grid[row][col - 1] === '1') markIsland(grid, row, col - 1);
    if(grid[row][col + 1] === '1') markIsland(grid, row, col + 1);
    if(grid?.[row - 1]?.[col] === '1') markIsland(grid, row - 1, col);
    if(grid?.[row + 1]?.[col] === '1') markIsland(grid, row + 1, col);
  }



  for (let row: number = 0; row < rowLen; row++) {
    for (let col: number = 0; col < colLen; col++) {
      if(grid[row][col] === '1'){
        markIsland(grid, row, col);
        counter++
      }
    }
  }
  return counter;
};