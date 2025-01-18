{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle; // It's return union of the type alias

  const person: Owner2 = "bike";

  //   Now we will extract value from an object using keyof operator dynamically

  const getPropertyValue = <T, Q extends keyof T>(obj: T, key: Q) => {
    return obj[key];
  };
  const user = {
    name: "Jakaria",
    age: 23,
    address: "kgm",
  };
  const car = {
    brand: "Tesla",
    year: 2030,
  };
  const result1 = getPropertyValue(user, "age");
  const result2 = getPropertyValue(car, "brand");
}
