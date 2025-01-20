{
  // Conditional type

  type a1 = null;
  type a2 = undefined;

  type x = a1 extends null ? true : false; // conditional type

  type y = a1 extends null ? true : a2 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  type checkVehicle<T> = T extends keyof Sheikh ? true : false;
  type hasBike = checkVehicle<"ship">;
}
