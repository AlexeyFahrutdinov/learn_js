let items1 = new Set(["Земля", "Вода", "Земля", "Вода"]);
let items2 = new Set(items1);
let items3 = new Set(["Трава", "Дерево", "Дерево", "Дерево"]);
let items4 = new Set([...items1, "Лава"]);

console.log(items4.size);
console.log(items4)