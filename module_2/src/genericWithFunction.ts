{
  // Generic with function

  //   Create array with generic
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resStrArray = createArrayWithGeneric<string>("Jack");
  const resNumberArray = createArrayWithGeneric<number>(4343);

  type User = { id: number; name: string };
  const resObjArray = createArrayWithGeneric<User>({
    id: 222,
    name: "Jack",
  });

  //   Create tuple with generic

  const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  interface DeveloperInfo {
    name: string;
    role: string;
    skills: string[];
  }

  const resTuple3 = createTupleWithGeneric<string, number>("Jack", 10000000);
  const resTuple4 = createTupleWithGeneric<number, DeveloperInfo>(123, {
    name: "Jakaria",
    role: "Instructor",
    skills: ["React", "Next", "Typescript", "Express"],
  });

  const AddStudentToCourse = <T>(student: T) => {
    const course = "Next level web development";
    return {
      ...student,
      course,
    };
  };

  type Student = {
    name: string;
    email: string;
  };

  const result = AddStudentToCourse<Student>({
    name: "Jakaria",
    email: "jakaria@gmail.com",
  });
}
