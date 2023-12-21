let data = [1, 1, 0, 0, 2, -3, -5, true, false];
let result = [];

function checkBool(data) {
    data.forEach(item => {
        if (typeof (item) === "boolean") result.push(item)
    });
    return result = result.join(", ");
}


function checkNull(data) {
    data.forEach(item => {
        if (item !== null) result.push(item)
    })
    return result.join(", ")
}


function sumSimilar(data) {
    let flag = true;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i] !== data[i + 1]) {
            flag = false;
            break;
        }
    }
    return result = flag;
}


function addMirrorArray(data) {
    return result = [...data, ...data.reverse().slice(1)].join(", ");
}


function replaceNegativItemZero(data) {
    data.forEach((item, i, data) => data[i] = data[i] < 0 ? 0 : data[i])

    return result = data;
}


function checkNeighbourZero(data) {
    result = false;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i] === 0 && data[i + 1] === 0) {
            result = true;
            break;
        }
    }
}

function replaceZeroToSumm(data) {
    data.forEach((item, i, data) => {
        if (i > 1 && data[i] === 0) data[i] = data[i - 1] + data[i - 2];
    })
    result = data;
    return result;
}

function booleanToString(data) {

    data.forEach((item, i, data) => {
        if (data[i] === true) data[i] = "on";
        else if (data[i] === false) data[i] = "off";
    })
    return result = data;
}

function searcPositiveNumberInArray(data) {
    result = null;
    for (let i = 0; i < data.length; i++) {
        if (typeof (data[i]) === "number" && data[i] > 0) {
            result = data[i];
            break
        }
    }
    return result;
}
searcPositiveNumberInArray(data);

function searchMaxAbsNumber(data) {
    result = Math.abs(data[0]);
    data.forEach(item => {
        if (Math.abs(item) > Math.abs(result) && typeof (item) === "number") result = item;

    })
    return result;
}

function myltiplyItemByMinItem(data) {
    minItem = data[0];
    data.forEach(item => minItem = item < minItem ? item : minItem);
    return result = data.map(item => minItem * item);
}

function checkMeanArifmetic(data){
    let sumItemArray = 0;
    data.forEach(item => sumItemArray = sumItemArray + item);
    let meanArifmeticArray = sumItemArray / data.length;
    return result = data.filter(item => item > meanArifmeticArray);  
}

function checkNextItemMore(data) {
    result = data.filter((item, i, data) => (i !== 0 && data[i] > data[i - 1]));
}

//checkNextItemMore(data); Проверяем, что элемент массива больше предыдущего. 
//checkMeanArifmetic(data); Отбираем элементы массива, которые больше среднего арифметического чисел массива
//myltiplyItemByMinItem(data);
//searchMaxAbsNumber(data);
//booleanToString(data);
//replaceZeroToSumm(data);
//checkNeighbourZero(data);
//sumSimilar(data);
//checkNull(data);
//checkBool(data);
//addMirrorArray(data);
//replaceNegativItemZero(data);



console.log(data);
console.log(result);


