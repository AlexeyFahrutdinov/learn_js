let arr1 = [1, 3, 5, 6, 7, 9];
let arr2 = [2, 4, 5, 6, 8];
let i = 0, j = 0;
let resultArr = []

while (i < arr1.length || j < arr2.length){
    if (arr1[i] <= arr2[j] || arr2[j] === undefined) {
        resultArr.push(arr1[i]);
        i++;
        console.log("i", i)
    }
    else if (arr2[j] < arr1[i] || arr1[i] === undefined){
        resultArr.push(arr2[j]);
        j++;
        console.log("j", j);
    }
}
    
    



console.log(resultArr);