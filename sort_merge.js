let arr1 = [1, 3 ,5, 7, 13];
let arr2 = [2, 4, 6, 8];
let i = 0; j =0;
result = []
while(i < arr1.length || j < arr2.length){
    if(arr1[i] < arr2[j] || arr2[j] === undefined){
        result.push(arr1[i]);
        i++;
        console.log(i)
    }
    else if(arr2[j] < arr1[i] || arr1[i] === undefined) {
        result.push(arr2[j]);
        j++;
        console.log(j)
    }
}
console.log(result);

