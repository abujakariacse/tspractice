{
  // Class and Object
  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
  }

  const dog = new Animal("Tommy", "Dog", "ghew ghew");
  const cat = new Animal("Persian", "Cat", "Meaw meaw");
  console.log(dog);
  console.log(cat);
}
