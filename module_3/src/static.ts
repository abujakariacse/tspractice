{
  // Static

  class Counter {
    static count: number = 0; //When we will use static it will stop creating dynamic memory in every instance and we can't access it as instance like this.count. We have to call it by it's className

    static incrementCount() {
      return (Counter.count = Counter.count + 1);
    }
    static decrementCount() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //   When we will use static in any method we have to call the method by it's class name
  //   const counter1 = new Counter();
  //   console.log(counter1.incrementCount());
  console.log(Counter.incrementCount());

  //   const counter2 = new Counter();
  //   console.log(counter2.incrementCount());
  console.log(Counter.incrementCount());
}
