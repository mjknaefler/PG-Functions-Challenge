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
console.log(sampleString);
console.log(reverseString(sampleString));

//Write a function that takes in an array of objects representing people, where each object has properties for name, age, and gender, and returns an array of objects representing only the people who are over the age of 18.
let people = [
    {name: "John Doe", age: 25, gender: "Male"},
    {name: "Jane Dear", age: 15, gender: "Female"},
    {name: "Tom Bridge", age: 18, gender: "Male"},
    {name: "Martha Smith", age: 35, gender:"Female"}
];

function adults(x){
    let adultArr = []
    for (let key of x){
        if (key.age >= 18){
            adultArr.push(key)
        }
    }
    return adultArr
}
console.log(adults(people));