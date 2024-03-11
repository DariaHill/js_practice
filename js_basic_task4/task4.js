/* Використовуючи .find(), виведіть перше ім'я, з довжиною більше 6 символів */

const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"];
const nameMore= names.find(name => name.length < 6);
console.log(nameMore);