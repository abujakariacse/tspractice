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

  //   Record type // It makes type dynamic
  type MyObj = {
    name: string;
    email: string;
  };

  const userObj: MyObj = {
    // if I use like that it will never allow me to add new property
    name: "Jack",
    email: "jack@gmail.com",
    // address: 'kurigram' // it will throw err
  };

  type MyNewObj = Record<string, string>; // Here I'm defining key, value types. Here key will be string. Cause we are using object.

  //   Here I can add any prop i want but must follow record type. It will allow make type dynamic
  const newUserObj: MyNewObj = {
    name: "Mack",
    model: "mini",
    realeaseYear: "2020",
  };

  //   If we don't know what will be type of value we can use unknown as second value of Record

  const emptyObject: Record<string, unknown> = {};
  emptyObject.name = "Jakaria";
  emptyObject.age = 20;
  emptyObject.isAdmin = true;
}
