{
  // ternary operator, Optional Chaining, Nullish Coalesing operator
  const age: number = 19;

  console.log(age >= 18 ? "Adult" : "Child");

  //   Nullish coalesing operator
  const IsAuthenticated = undefined;

  const result1 = IsAuthenticated ?? "Guest";
  console.log({ result1 });
}
