let person = new Object();
person.name = "John";
person.age = "36";
person.gender = "Male";
person.introduce = function(){
    return "Hello! My name is " + this.name + "and i'm " + this.age + " years old."
};
    console.log(person.introduce());

let car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = "2023";
car.drive = function(){
return "The make is " + this.make + "the " + this.year + "year old"
}
console.log(car.drive())