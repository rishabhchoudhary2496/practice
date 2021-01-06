class Rectangle {
  constructor(length, breadth) {
    this.length = length
    this.breadth = breadth
  }

  static printWelcomeMessage() {
      console.log('Thanks for using this class')
  }

  printArea() {
    console.log(this.length * this.breadth)
  }

  printPerimeter() {
    console.log(2 * (this.length + this.breadth))
  }
}

let r = new Rectangle(10,20)
Rectangle.printWelcomeMessage()
r.printArea()
r.printPerimeter()


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.