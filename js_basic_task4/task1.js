/* Використовуючи звичайний цикл for, порахуйте кількість позитивних та негативних чисел та нулів.
 */

let numbers=[5,-3,7,0,-4,9,8,-9];

let positiveCount=0;
let negativeCount=0;
let zeroCount=0;

for(let i=0; i<numbers.length; i++){
    if (numbers[i]>0){
        positiveCount++;
    }else if (numbers[i]<0){
        negativeCount++;
    }else {
            zeroCount++
        } 
}

console.log("Positive numbers:" +positiveCount);
console.log("Negative numbers:" +negativeCount);
console.log("Zeros: " + zeroCount);
