// let data = [1, 3, 4, 5, 6, 7, 7, 8, 2, 4, 5, 2, 7, 2, 9];
// let result;
let change;
let j = 1;


while (true) {
    // console.log(j,"-й проход");
    change = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > data[i + 1]) {
            let tmpStorage = data[i];
            // console.log("Меняем местами", data[i], "и", data[i + 1]);
            data[i] = data[i + 1];
            data[i + 1] = tmpStorage;
            change = 1;
        }
    }
    if (change === 0) break;
   j++;
}

let arrEven = [];
let arrOdd = [];

for(let i = 0; i < data.length; i++){
    if(data[i] % 2 === 0) arrEven.push(data[i]);
    if(data[i] % 2 !== 0) arrOdd.push(data[i]);
}
result = "(" + arrEven.join(", ") + ") (" + arrOdd.join(", ") + ")"; 

// console.log(data);
// console.log(arrEven);
// console.log(arrOdd);
// console.log(result);