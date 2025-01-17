{
  // nullable type

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null);

  //   unknown type
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const converted = (value * 1000) / 3600;
      console.log(`The speed is ${converted} ms^-1`);
    } else if (typeof value === "string") {
      const [result] = value.split(" ");
      const convertedString = (parseInt(result) * 1000) / 3600;
      console.log(`The speed is ${convertedString} ms^-1`);
    } else {
      console.log("Wrong input");
    }
  };

  //   Never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("Oops! Server down");
}
