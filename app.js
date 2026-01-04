import Phone from './classes/phone.js';
import Animal from './classes/Animal.js';
import Rectangle from './classes/Rectangle.js';
import BankAccount from './classes/BankAccount.js';
import Dog from './classes/dog.js';
import Car from './classes/car.js';
import Vehicle from './classes/vehicle.js';
import Book from './classes/book.js';

const iphone = new Phone('apple', '17 pro');
const area = new Rectangle(5, 4);
const myAcount = new BankAccount(1000);

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
const dog = new Dog('lasi');
dog.sound();

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
const myCar = new Car('toyota', 'car');

myCar.info();

const myBpook = new Book('the hobbit', 'tolkin');
myBpook.info();
