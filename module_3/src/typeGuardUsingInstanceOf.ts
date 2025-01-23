{
  // Type guard using instance of
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I'm making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I'm barking...");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I'm meawing...");
    }
  }

  const dog = new Dog("Kuttu", "Dog");
  const cat = new Cat("Rocky", "Cat");

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isCat(animal)) {
      animal.makeMeaw();
    } else if (isDog(animal)) {
      animal.makeBark();
    } else {
      animal.makeSound();
    }
  };

  getAnimal(cat);
}
