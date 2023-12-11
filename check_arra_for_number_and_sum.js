let data = [null, 42, "Макс", false, 3.14];
let result = [ ];
data.forEach((item) => { if (typeof(item) === "number") result.push(item)});
result = result.join(", ");
console.log(result);
