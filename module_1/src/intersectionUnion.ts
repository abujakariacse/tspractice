{
  // union type

  //   type FrontendDeveloper = "fokiraDeveloper" | "juniorDeveloper";
  //   type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

  //   type Developer = FrontendDeveloper | FullStackDeveloper;

  //   const newDeveloper: Developer = "fokiraDeveloper";

  type User = {
    name: string;
    email: string;
    blood: "A+" | "AB+" | "O+" | "B+"; // string literal
    gender: "male" | "female";
  };

  const newUser: User = {
    name: "jack",
    email: "abujakariacse@gmail.com",
    blood: "AB+",
    gender: "male",
  };

  //   Intersection type
  type FrontendDeveloper = {
    designation1: "Frontend Developer";
    skills: string[];
  };

  type BackendDeveloper = {
    designation2: "Backend Developer";
    skills: string[];
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const newDev: FullStackDeveloper = {
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
    skills: ["HTML", "CSS", "Express", "Mongo"],
  };
}
