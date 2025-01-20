{
  // Mapped type
  const arrOfNumber: number[] = [1, 3, 5, 6];
  const arrOfString: string[] = ["1", "4", "5"];

  const arrOfStringMap: string[] = arrOfNumber.map((number) =>
    number.toString()
  );

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; //look up type

  type AreaString = {
    [key in keyof AreaNumber]: boolean;
  };

  //   using generic
  type AreaStringLookup<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaStringLookup<{ height: string; width: number }> = {
    height: "10",
    width: 50,
  };
}
