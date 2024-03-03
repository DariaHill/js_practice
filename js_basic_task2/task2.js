let basicValue = 10000;
let yearOfManufacture = 2023;
let mileage = 110000;
let climateСontrol = true;
let electricCar = false;
let securityPackage = true;

if (yearOfManufacture >= 2019 && yearOfManufacture <= 2022) {
  yearOfManufacture = basicValue + (basicValue * 10) / 100;
  console.log(basicValue);
  console.log(
    `The final price of the car relative to the year of manufacture ${yearOfManufacture} грн`
  );
}
if (mileage >= 50000 && mileage <= 100000) {
  mileage = basicValue - (basicValue * 5) / 100;
  console.log(basicValue);
  console.log(
    `The final price of the car relative to the mileage is ${mileage} грн`
  );
}
if (climateСontrol == true) {
  climateСontrol = basicValue + (basicValue * 7) / 100;
  console.log(basicValue);
  console.log(
    `The final price of the car relative to theclimate control is ${climateСontrol}`
  );
} else {
  console.log(basicValue);
}
if (securityPackage == true) {
  securityPackage = basicValue + (basicValue * 8) / 100;
  console.log(basicValue);
  console.log(
    `The final price of the car relative to the security package is ${mileage} грн`
  );
}
if (electricCar == true) {
  electricCar = basicValue + (basicValue * 15) / 100;
  console.log(basicValue);
  console.log(
    `The final price of the car relative to the electric car is ${mileage} грн`
  );
}
