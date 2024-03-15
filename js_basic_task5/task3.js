/* Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає суму всіх чисел у масиві. */

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const numbers = [7, 8, 9, 4, 5];
const totalSum = sumArray(numbers);
console.log("Сума чисел у масиві:", totalSum);