/* За допомогою .every() перевірити, чи всі елементи масиву менше 50 */

const numbers = [0, 23, 1, -53, 49, 44,33,5];
const numbersLess50= numbers.every(number => number<50);

console.log(numbersLess50);