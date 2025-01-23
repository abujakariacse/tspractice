{
  // Abstruction - It will give you idea not the implementation/
  //   We can do that in 2 way. 1. Using Interface 2. Using abstract class

  //   Using Interface
  //   Idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   Implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("Starting the car engine");
    }
    stopEngine(): void {
      console.log("Stopping the car engine");
    }
    move(): void {
      console.log("Moving the car");
    }
  }

  const car1 = new Car1();
  //   car1.startEngine();
  //   car1.stopEngine();
  //   car1.move();

  //   Using abstract class

  //   Idea
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  // Implementation
  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log("Starting the car engine using abstract class");
    }
    stopEngine(): void {
      console.log("Stopping the car engine using abstract class");
    }
    move(): void {
      console.log("Moving the car using abstract class");
    }
  }

  //   When we will use abstract in a class we can't make instance of that. But we can extend that.
  //   const car2 = new Vehicle();
  //   car2.startEngine();

  const car2 = new Car2();
  car2.startEngine();

  //
}
