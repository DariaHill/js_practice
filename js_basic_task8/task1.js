class Animal{
constructor(color, name, type){
    this.color= color;
    this.name= name;
    this.type= type;
}
sayHello(){
console.log(`Hello I'm is ${this.name} the ${this.type} `);
}

run(){
    console.log(`${this.name} is running`);
}
}

const myAnimal= new Animal("white", "Asya", "dog");
myAnimal.sayHello();
myAnimal.run();