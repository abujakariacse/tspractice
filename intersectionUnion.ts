{
  // union type

  type FrontendDeveloper = "fokiraDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: Developer = "fokiraDeveloper";

  type User = {
    name: string;
    email: string;
    blood: "A+" | "AB+" | "O+" | "B+";
    gender: "male" | "female";
  };

  const newUser: User = {
    name: "jack",
    email: "abujakariacse@gmail.com",
    blood: "AB+",
    gender: "male",
  };
}
