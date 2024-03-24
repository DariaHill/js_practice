// Клас Animal
class Animal {
    constructor(color, name, type) {
        this.color = color;
        this.name = name;
        this.type = type;
    }

    // Метод sayHello
    sayHello() {
        console.log(`Hello, I'm ${this.name} the ${this.type}!`);
    }

    // Метод run
    run() {
        console.log(`${this.name} is running!`);
    }
}

// Клас Dog, що успадковує від Animal
class Dog extends Animal {
    constructor(color, name, type, breed, age) {
        super(color, name, type);
        this.breed = breed;
        this.age = age;
    }

    // Індивідуальний метод для собаки
    wagTail() {
        console.log(`${this.name} is wagging its tail happily!`);
    }

    // Індивідуальний метод для собаки
    bark() {
        console.log(`${this.name} says: Woof woof!`);
    }
}

const dog1 = new Dog("brown", "Buddy", "dog", "Golden Retriever", 3);
console.log(dog1.color);   
console.log(dog1.name);    
console.log(dog1.type);  
console.log(dog1.breed);   
console.log(dog1.age);     
dog1.sayHello();           
dog1.run();                
dog1.wagTail();            
dog1.bark();               
