function divider(divisor) {
    return function(dividend) {
        return dividend / divisor;
    };
}
const divideBy2 = divider(2);

console.log(divideBy2(10)); 
const divideBy3 = divider(3);
console.log(divideBy3(15));