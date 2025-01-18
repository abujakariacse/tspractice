{
  // Constraint -> You must have to pass the value otherwise it will throw error

  interface Student {
    id: number;
    name: string;
    email: string;
  }

  const AddStudentToCourse = <T extends Student>(student: T) => {
    const course = "Next level web development";
    return {
      ...student,
      course,
    };
  };

  const result = AddStudentToCourse<Student>({
    name: "Jakaria",
    email: "jakaria@gmail.com",
    id: 68,
  });

  const result2 = AddStudentToCourse({
    id: 232,
    name: "Jakaria",
    email: "jakaria@gmail.com",
    test: "test",
  });
}
