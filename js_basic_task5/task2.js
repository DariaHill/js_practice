/* Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає новий масив, в якому кожен елемент буде піднесений до квадрата. */

let inputArray=(5,7,3,9,4);
let squaredArr=inputArray(inputArray);

function numbersInSquared (arr){
let squaredArr =[];
for (let i=0; i<arr.length; i++){
    squaredArr.push(arr[i]*arr[i]);
    return squaredArr;
}
}
console.log(squaredArr)