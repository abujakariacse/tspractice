{
  // Interface

  //   intetsection using type
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  const user1: UserWithRole1 = {
    name: "jack",
    age: 23,
    role: "instructor",
  };

  //   Intersection using interface
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: UserWithRole2 = {
    name: "mack",
    age: 24,
    role: "admin",
  };

  //   array declaration using type
  type Ages = number[];

  const ages: Ages = [25, 26, 37, 3434, 43, 431];

  //array declaration using interface
  interface Ages2 {
    [index: number]: number;
  }
  const ages2: Ages2 = [267, 32, 32, 43, 2];

  // Function using type
  type Add = (num1: number, num2: number) => number;

  //   Function using interface
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => {
    return num1 + num2;
  };
}
