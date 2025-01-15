{
  // destructuring

  //=================================//
  //   Object destructuring
  const user = {
    id: 32,
    name: {
      firstName: "Md",
      middleName: "Abu",
      lastName: "Jakaria",
    },
    age: 23,
    contactNo: "01316460386",
  };

  //   name alias and destructure
  const {
    age,
    name: { middleName: midName },
    contactNo: phoneNumber,
  } = user;

  // ==================================//
  // array destructuring

  const myFriends = ["Jack", "Mack", "Rack", "Tack", "Lack", "Vack"];

  //   here skiping 2 element, taking oneElement in bestFriend and taking other in one Variable using rest operator
  const [, , bestFriend, ...rest] = myFriends;
}
