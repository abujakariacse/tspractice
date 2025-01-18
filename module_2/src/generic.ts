{
  // Generic

  type GenericArr<T> = Array<T>;

  const rollNumbers: GenericArr<number> = [36, 48, 34, 38, 49, 27, 49];

  const userNames: GenericArr<string> = ["Jakaria", "Maidul", "Rony", "Juel"];

  const isAdmin: GenericArr<boolean> = [true, false, false, true];

  //   Array of object using generic

  const users: GenericArr<{
    name: string;
    age: number;
  }> = [
    {
      name: "Jakaria",
      age: 23,
    },
    {
      name: "Maidul",
      age: 23,
    },
    {
      name: "Rony",
      age: 23,
    },
  ];

  //   Tuple using array
  type GenericTuple<X, Y> = [X, Y];

  const couple: GenericTuple<string, string> = ["Jakaria", "Medha"];

  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "medha", email: "medha@gmail.com" },
  ];
}
