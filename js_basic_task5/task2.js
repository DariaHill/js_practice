/* Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає новий масив, в якому кожен елемент буде піднесений до квадрата. */

/* let inputArray=(5,7,3,9,4);
let squaredArr=inputArray(inputArray);

function numbersInSquared (arr){
let squaredArr =[];
for (let i=0; i<arr.length; i++){
    squaredArr.push(arr[i]*arr[i]);
    return squaredArr;
}
}
console.logsquareArrayElements(squaredArr) */

function squareArrayElements (arr){
    let squaredArray = arr.map(function(element){
        return element* element;
    });
    return squaredArray ;
}

let inputArray = [5,7,9,3,4];
squaredArray = squareArrayElements(inputArray);
console.log("Масив з піднесеними до квадрату елементами:", squaredArray);


/* let squear =a=> a*a;

console.log(squear(5)); */