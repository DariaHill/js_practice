let basicValue = 10000;
let yearOfManufacture;

if (yearOfManufacture >= 2019 && yearOfManufacture <= 2022) {
  yearOfManufacture = basicValue + (basicValue * 10) / 100;
  message = "The cost of your car";
  console.log("message ${yearOfManufacture} грн");
}
