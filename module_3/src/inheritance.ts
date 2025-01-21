{
  // OOP- Inheritance

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(hours: number) {
      console.log(`${this.name} will sleep for ${hours} hours daily`);
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Jack", 23, "Kurigram");
  console.log(student1);

  student1.getSleep(7);

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);

      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take  ${numOfClass} class`);
    }
  }

  const teacher1 = new Teacher("Jakaria", 45, "Dhaka", "Professor");
  console.log(teacher1);

  teacher1.getSleep(8);
  teacher1.takeClass(5);
}
