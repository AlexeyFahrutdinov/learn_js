let size = 6;
let position = "left1";
let data = [1, 2, 3]
let result;
let arrZero = [];

if (data.length > size) result = "Неверный размер";
else if (data.length === size) result = data.join(", ");
else if (position !== "right" && position !== "left") result = "Неверная позиция";
else {
    for (let i = 0; i < size - data.length; i++) {
        arrZero.push(0);
    }
    result = position === "right" ? [...data, ...arrZero] : [...arrZero, ...data];
}

console.log(result)