let basicIncome = 300000;
let tax;
let profit;

if (basicIncome <= 10000) {
  tax = 5;
  profit = basicIncome - (basicIncome * tax) / 100;
  console.log(basicIncome);
  console.log(`Your profit is ${profit}`);
  console.log(`Your tax ${tax}%`);
} else if (basicIncome >= 10001 && basicIncome <= 50000) {
  tax = 10;
  profit = basicIncome - (basicIncome * tax) / 100;
  console.log(basicIncome);
  console.log(`Your profit is ${profit}`);
  console.log(`Your tax ${tax}%`);
} else if (basicIncome >= 50001 && basicIncome <= 100000) {
  tax = 15;
  profit = basicIncome - (basicIncome * tax) / 100;
  console.log(basicIncome);
  console.log(`Your profit is ${profit}`);
  console.log(`Your tax ${tax}%`);
} else if (basicIncome >= 100001 && basicIncome <= 200000) {
  tax = 20;
  profit = basicIncome - (basicIncome * tax) / 100;
  console.log(basicIncome);
  console.log(`Your profit is ${profit}`);
  console.log(`Your tax ${tax}%`);
} else if (basicIncome >= 200001) {
  tax = 25;
  profit = basicIncome - (basicIncome * tax) / 100;
  console.log(basicIncome);
  console.log(`Your profit is ${profit}`);
  console.log(`Your tax ${tax}%`);
}
