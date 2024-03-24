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
  
  // Дочірній клас Dog
  class Dog extends Animal {
    constructor(color, name, type, breed, age, favoriteActivity) {
      super(color, name, type);
      this.breed = breed;
      this.age = age;
      this.favoriteActivity = favoriteActivity;
    }
  
    bark() {
      console.log(`${this.name} says Woof!`);
    }
  
    fetch() {
      console.log(`${this.name} is fetching.`);
    }
  }
  
  // Дочірній клас Cat
  class Cat extends Animal {
    constructor(color, name, type, breed, age, favoriteFood) {
      super(color, name, type);
      this.breed = breed;
      this.age = age;
      this.favoriteFood = favoriteFood;
    }
  
    meow() {
      console.log(`${this.name} says Meow!`);
    }
  
    sleep() {
      console.log(`${this.name} is sleeping.`);
    }
  }
  
  // Створення об'єктів та виклик методів
  const myDog = new Dog('brown', 'Buddy', 'dog', 'Labrador', 5, 'playing fetch');
  myDog.sayHello();
  myDog.run();
  myDog.bark();
  myDog.fetch();
  
  const myCat = new Cat('gray', 'Whiskers', 'cat', 'Persian', 3, 'tuna');
  myCat.sayHello();
  myCat.run();
  myCat.meow();
  myCat.sleep();