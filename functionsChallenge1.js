let arr = [1,2,3,4,5];

//Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.

function sumArray(x){
    sum = 0;
    for(i=0;i<x.length;i++){
        sum += x[i];
    }
    return sum;
}
console.log(sumArray(arr));

//Write a function that takes in a string and returns the string reversed.
let sampleString = 'Hello World!'
function reverseString(x){
    newArr = [...x];
    splitString = x.split('');
    reverseArr = splitString.reverse()
    newArr = reverseArr.join('');
    return newArr;
}
console.log(reverseString(sampleString));