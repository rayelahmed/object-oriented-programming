class Player {
    constructor(name, age, skill){
        this.name= name;
        this.age= age;
        this.skill= skill;
    }
    sayHello(){
        return `Hello I am ${this.name}, my skill is ${this.name}`
    }
}

const Miraj = new Player( "miraj", 35, "Bowler" )
console.log(Miraj.age)

Miraj.sayHello()



// 1. Inheritance

class Human{
    constructor(name){
        this.name = name;
        this.arm = 2
        this.leg = 2
    }

}

 class Baby extends Human{
    constructor(name){
        super(name);
        this.cry = true;
    }
    
 }


 const diraj = new Baby('Diraj')
 console.log(diraj.name)


//2. ENCAPSULATION


class Player{

    constructor(name, birthDay, monthlySalary, noOfMonth){
        this.name = name;
        this.birthDay = birthDay;
        this.monthlySalary = monthlySalary;
        this.noOfMonth = noOfMonth;
      

    }
    calculate_age(){
      const diff_ms = Date.now() - new Date(this.birthDay).getTime();
        const age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970)
    }

    getSalary(){
        return (this.monthlySalary * this.noOfMonth).toLocaleString();
    }

}

const  shakib = new Player("Shakib", "1987-03-24", 100000, 12 )
console.log(shakib.getSalary())



// Inheritance

// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log('Some sound');
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    sound() {
        console.log('Woof!');
    }
}

let myDog = new Dog('Buddy', 'Golden Retriever');
console.log(myDog.name); // Output: Buddy
myDog.sound(); // Output: Woof!





// Abstraction

// Encapsulation and Abstraction
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.engineStatus = 'off';
    }

    startEngine() {
        this.engineStatus = 'on';
        console.log('Engine started.');
    }

    stopEngine() {
        this.engineStatus = 'off';
        console.log('Engine stopped.');
    }
}

let myCar = new Car('Toyota', 'Camry');
myCar.startEngine(); // Output: Engine started.
console.log(myCar.engineStatus); // Output: on



// Polymorphism
// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Some sound');
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log('Woof!');
    }
}

// Another child class inheriting from Animal
class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log('Meow!');
    }
}

// Function using polymorphism
function animalSound(animal) {
    animal.makeSound();
}

// Creating objects of different classes
let dog = new Dog('Buddy');
let cat = new Cat('Whiskers');

// Calling the function with different objects
animalSound(dog); // Output: Woof!
animalSound(cat); // Output: Meow!

