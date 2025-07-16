// Base class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Common method
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat class
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Dog class
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
