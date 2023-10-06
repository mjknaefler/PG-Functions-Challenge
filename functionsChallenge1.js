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

//Write a function that takes in an array of numbers and returns a new array containing only the even numbers from the original array.
let numbers = [1,2,3,4,5,6]
function evenNums(x){
    let evens = [];
    for (let key of x){
        if(key % 2 === 0){
            evens.push(key);
        }
    }
    return evens;
}
console.log(evenNums(numbers))

//Write a function that takes in an array of strings and returns a new array containing only the strings that start with the letter "A".
let stringArr = ['Apple','Butter','Aloha','Zebra','Alaska'];
function aString(x){
    let aArr = [];
    for (let key of x){
        if(key.toUpperCase()[0]==='A'){
            aArr.push(key)
        }
    }
    return aArr;
}
console.log(aString(stringArr));

//Write a function that takes in an array of objects representing books, where each object has properties for title, author, and published, and returns an array of strings representing the titles of all the books published in the year 2000 or later.
let books = [
    {title:"Book A",author:"Author 1",published:"01/02/2004"},
    {title:"Book B",author:"Author 2",published:"08/30/2010"},
    {title:"Book C",author:"Author 1",published:"01/02/2000"},
    {title:"Book D",author:"Author 3",published:"01/02/1999"}
];
function publishedAfter2000(x){
    let newArr = []
    for(let key of x){
        let tempString = key.published
        let tempInt = Number(tempString.slice(tempString.length-4,tempString.length))
        if(tempInt >= 2000){
            newArr.push(key.title)
        }
    }
    return newArr;
};
console.log(publishedAfter2000(books))

//Write a function that takes in two numbers and returns the larger of the two.
let intA = 50;
let intB = 100;
function greaterNum(x,y){
    if(x>=y){
        return x;
    } else{
        return y;
    }
}

console.log(greaterNum(intA,intB));

//Write a function that takes in an array of numbers and returns the smallest number in the array.
let numArr = [1,4,6,1,2,4,-2];
function smallestNum(x){
    let tempInt = x[0];
    for(i=1;i<x.length;i++){
        if (tempInt >= x[i]){
            tempInt = x[i]
        }
    }
    return tempInt;
}
console.log(smallestNum(numArr));

//Write a function that takes in an array of strings and returns the longest string in the array.
let stringArr2 = ['one','two','three','four','five','six','seven'];
function longestString(x){
    let longestStringTemp = x[0];
    for(i=1;i<x.length;i++){
        if(longestStringTemp.length < x[i].length){
            longestStringTemp = x[i];
        }
    }
    return longestStringTemp;
};
console.log(longestString(stringArr2));

//Write a function that takes in an array of objects representing students, where each object has properties for name and grade, and returns an array of objects representing only the students who have a grade of "A".
let students = [
    {name:"John Doe",grade:"A"},
    {name:"Jane Dear",grade:"A"},
    {name:"Joe Dirt",grade:"B"},
    {name:"Jessy Smith",grade:"C"},
    {name:"Tim Stewart",grade:"A"}
];
function studentsWithA(x){
    let aGrades = [];
    for(let key of x){
        if(key.grade === 'A'){
            aGrades.push(key);
        }
    }
    return aGrades;
}
console.log(studentsWithA(students));