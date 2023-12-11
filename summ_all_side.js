let grid = [[6, 1, 7],
            [1, 2, 1],
            [1, 1, 1],
            [8, 3, 9]];
let result = 0;
for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++){
        if (i === 0 || j === 0 || i === grid.length - 1 || j === grid[i].length - 1) result += grid[i][j]
    }
}
result += grid[0][0] + grid[0][grid[0].length - 1] + grid[grid.length - 1][0] + grid[grid.length - 1][grid[grid.length - 1].length - 1]
console.log(grid[0][0], grid[0][grid[0].length - 1], grid[grid.length - 1][0], grid[grid.length - 1][grid[grid.length - 1].length - 1])

console.log(result);

