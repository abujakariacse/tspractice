{
  // Polymorphism
  /* Amra jokhon ekta base class theke onek gula instance create kori and base class er method jokhon drive class a giye redesign hoy tokhon oi method vinno vinno somoy vinno vinno output dey. etai mainly polymorphism */

  class Person {
    getSleep() {
      console.log("I'm sleeping for 8 hours per day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I'm sleeping for 7 hours per day");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("I'm sleeping for 6 hours per day");
    }
  }

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  person1.getSleep();
  person2.getSleep();
  person3.getSleep();

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    // we can't redesign method in our way. We have to make sure the method structure is same.
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    // we can't redesign method in our way. We have to make sure the method structure is same.
    getArea(): number {
      return this.height * this.width;
    }
  }

  //   We will make a function to get the value as console
  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  //   Here we are seeing that same method is giving different differnt output
  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);

  //
}
