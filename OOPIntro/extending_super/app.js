//extending classes example
class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return `MEOWWW!!`;
    }
}

class Dog extends Pet {
    woof() {
        return `WOOOFF!`;
    }
    //overriding the default eat()
    eat() {
        return `${this.name} scarfs his food`;
    }
}