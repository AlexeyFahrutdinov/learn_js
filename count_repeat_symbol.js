data = ["a", "a", "a", "b", "b", "c", "c", "a", "a", "a"];
let tmpSt
orage = data[0];
let count = 1;
let resultString = '';

for(i = 1; i <= data.length; i++){
    if(data[i] === data[i - 1]) {
        count++;
    }
    else {
        resultString += data[i - 1] + count;
        count = 1;
    }
    console.log(data[i], count);
}
console.log(resultString);
