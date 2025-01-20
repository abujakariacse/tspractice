{
  // Type assertion -> when we understand the type better than typecript its call type assertion. we use "as" to define the type. Examples are below

  let anything: any;

  anything = "Complete web deleveloment";
  // When we will "as" it will give us the property of the specific data type
  // (anything as string)

  // type assertion in function
  const kgToGm = (value: string | number): number | string | undefined => {
    if (typeof value === "string") {
      const convertedValue = Number(value) * 1000;
      return `Converted result is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;
}
