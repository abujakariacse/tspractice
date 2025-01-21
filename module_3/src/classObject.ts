{
  // Class and Object
  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    // Parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`The ${this.name} sounds ${this.sound}`);
    }
  }

  const dog = new Animal("Tommy", "Dog", "ghew ghew");
  dog.makeSound();
  const cat = new Animal("Persian", "Cat", "Meaw meaw");
  cat.makeSound();
  console.log(dog);
  console.log(cat);
}
