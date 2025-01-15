{
  //  Learn Spread Operator

  const bros1: string[] = ["Rokib", "Hasib", "Jasim"];
  const bros2: string[] = ["Shahriar", "Raju", "Milton"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //   Learn Rest operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi, ${friend}`));
  };

  greetFriends("abul", "babul", "cabul");
}
