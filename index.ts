let a = 5;  
let b = 5;  
let c = a + b;

console.log(c);

let num: number = 5
let name: string = 'shane'
let isPresent: boolean = true

// OO Typescript

class Car {
  model: String
  doors: Number
  isElectric: Boolean

  constructor(model: String, doors: Number, isElectric: Boolean) {
    this.model = model;  
    this.doors = doors;  
    this.isElectric = isElectric; 
  }

  displayMake(): void {
    console.log(`This car is ${this.model}`)
  }

}

const prius = new Car('Prius', 4, true)
prius.displayMake()

// interface

interface ICar {
  model: String
  make: String 
  display(): void
} 

const InterfaceCar: ICar = {
  model: 'prius',
  make: 'toyota',
  display() { console.log('hi') }  
}
