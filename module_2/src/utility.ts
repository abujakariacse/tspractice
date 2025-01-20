{
  // Utility
  // Pick

  type Person = {
    name: string;
    age: number;
    email: string;
    contactNo?: number;
  };

  type NameAndAge = Pick<Person, "name" | "age">; //tule neya

  // omit // maane baad deya
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required type
  type PersionRequired = Required<Person>;

  // type Partial //its make all property optional
  type PersonPartial = Partial<Person>;

  // Readonly type
  const user: Person = {
    // Here i can change value
    name: "Jack",
    age: 23,
    email: "jack@gmail.com",
    contactNo: 188883,
  };

  user.name = "Jakaria";

  type userReadOnly = Readonly<Person>;
  const userReadonly: userReadOnly = {
    // Here i can change value
    name: "Jack",
    age: 23,
    email: "jack@gmail.com",
    contactNo: 188883,
  };

  //   userReadonly.name = "Jakaria" // it will throw err
}
