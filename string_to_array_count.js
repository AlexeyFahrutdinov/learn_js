let str = 'a2b3c1';
let result = [];
for (let i = 0; i < str.length; i++){
    if (i % 2 !== 0) {
        for(let j = 0; j < str[i]; j++){
            result.push(str[i - 1])
        }
    }
}
console.log(result);