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

  type AreaString<T> = {
    [key in  keyof T] : T[key]
  }
}
