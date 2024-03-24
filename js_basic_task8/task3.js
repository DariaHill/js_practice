// Клас Animal
class Animal {
    constructor(color, name, type) {
      this.color = color;
      this.name = name;
      this.type = type;
    }
  
    sayHello() {
      console.log(`Hello, I'm ${this.name} the ${this.type}!`);
    }
  
    run() {
      console.log(`${this.name} is running.`);
    }
  }
  
  // Дочірній клас Cat
  class Cat extends Animal {
    constructor(color, name, type, breed, age, favoriteNappingSpot) {
      super(color, name, type);
      this.breed = breed;
      this.age = age;
      this.favoriteNappingSpot = favoriteNappingSpot;
    }
  
    purr() {
      console.log(`${this.name} is purring.`);
    }
  
    sleep() {
      console.log(`${this.name} is napping in its favorite spot: ${this.favoriteNappingSpot}.`);
    }
  }
  
  // Створення об'єкта кота та виклик методів
  const myCat = new Cat('gray', 'Whiskers', 'cat', 'Persian', 5, 'on the windowsill');
  myCat.sayHello();
  myCat.run();
  myCat.purr();
  myCat.sleep();