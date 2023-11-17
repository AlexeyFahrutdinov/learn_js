let data = [];
for (let i = 10; i <= 30; i++) {
    data.push(i)
}
console.log("Исходный массив:", data);

let item = 20;
let currentArr = [];
let currentItem, currentItemIndex;

currentArr = data;

while (currentArr.length > 1) {
    if(item > currentArr[currentArr.length - 1] || item < currentArr[0]) {
        console.log("Элемент не входит в массив");
        break;
    }
    currentItemIndex = Math.ceil(currentArr.length / 2);
    currentItem = currentArr[currentItemIndex];
    console.log("Средний элемент: ", currentItem);
    currentItem = currentArr[currentItemIndex];

    if (item === currentItem) {
        console.log("Элемент найден, его индекс:");
        break;
    }
    else if (item < currentItem) {
        currentArr = currentArr.slice(0, currentItemIndex);
        console.log("Ищем в массиве: ", currentArr);
    }
    else if (item > currentItem) {
        currentArr = currentArr.slice(currentItemIndex + 1, currentArr.length);
        console.log("Ищем в массиве: ", currentArr);
    }
    else {
        console.log("Элемента нет в этом массиве")
    }
    if (currentArr.length === 1) {
        if (item === currentArr[0]) {
            console.log("Элемент найден, его индекс:");
            break;
        }
        else {
            console.log("Элемента нет в этом массиве");
            break;
        }
    }
}
