let data = [1, 3, 4, 5, 6, 7, 7, 8, 2, 4, 5, 2, 7, 2, 9];
let n = 3;

let result = [...data.slice(n, -1),...data.slice(0, n)].join(", ");
console.log(result);