// Constructor function (Pseudo Class)
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

// Adding method to the prototype
Person.prototype.introduce = function() {
  console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`);
}

// Creating 5 instances using the pseudo class
const person1 = new Person("Alice", 25, "New York");
const person2 = new Person("Bob", 30, "Los Angeles");
const person3 = new Person("Charlie", 28, "Chicago");
const person4 = new Person("Debbie", 32, "San Francisco");
const person5 = new Person("Edward", 29, "Boston");

// To test them, you can call:
// person1.introduce();
// person2.introduce();
// ... and so on

class Vehicle {
  constructor(manufacturer, numberOfWheels) {
    this.manufacturer = manufacturer;
    this.numberOfWheels = numberOfWheels;
  }

  aboutVehicle() {
    console.log(`This is a vehicle made by ${this.manufacturer} and it has ${this.numberOfWheels} wheels.`);
  }
}

class Truck extends Vehicle {
  constructor(manufacturer, numberOfDoors, hasTruckBed) {
    super(manufacturer, 4);  // Trucks typically have 4 wheels
    this.numberOfDoors = numberOfDoors;
    this.hasTruckBed = hasTruckBed;
  }

  aboutVehicle() {
    console.log(`This is a truck with ${this.numberOfWheels} wheels and ${this.numberOfDoors} doors. ${this.hasTruckBed ? 'It has a truck bed.' : 'It does not have a truck bed.'}`);
  }
}


class Motorcycle extends Vehicle {
  constructor(manufacturer) {
    super(manufacturer, 2); // Motorcycles typically have 2 wheels
    this.hasHandlebars = true; // Motorcycles have handlebars
    this.hasDoors = false; // Motorcycles don't have doors
  }

  aboutVehicle() {
    console.log(`This is a motorcycle made by ${this.manufacturer}. It has ${this.numberOfWheels} wheels, ${this.hasHandlebars ? 'handlebars' : 'no handlebars'}, and ${this.hasDoors ? 'doors' : 'no doors'}.`);
  }
}

class Sedan extends Vehicle {
  constructor(manufacturer, size, mpg) {
    super(manufacturer, 4);  // Sedans typically have 4 wheels
    this.size = size; // Possible values: "small" or "medium"
    this.mpg = mpg;   // Miles per gallon
  }

  aboutVehicle() {
    console.log(`This is a ${this.size} sedan with ${this.numberOfWheels} wheels and it gets ${this.mpg} mpg.`);
  }
}

const mySedan = new Sedan(4, "medium", 30);
mySedan.aboutVehicle();  // This is a medium sedan with 4 wheels and it gets 30 mpg.

// Example of creating specific vehicle instances and calling the aboutVehicle method:
const myVehicle = new Vehicle("Toyota", 4);
myVehicle.aboutVehicle();  // This is a vehicle made by Toyota and it has 4 wheels.

const myTruck = new Truck(4, 2, true);
myTruck.aboutVehicle();  // This is a truck with 4 wheels and 4 doors. It has a truck bed.

const myMotorcycle = new Motorcycle("Harley-Davidson");
myMotorcycle.aboutVehicle();  // This is a motorcycle made by Harley-Davidson and it has 2 wheels.

const anotherMotorcycle = new Motorcycle("Ducati");
anotherMotorcycle.aboutVehicle();  // This is a motorcycle made by Ducati. It has 2 wheels, handlebars, and no doors.