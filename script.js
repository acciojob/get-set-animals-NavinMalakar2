//complete this code
class Animal {}

class Dog extends Animal {
	constructor(species){
		this._species = species
	}
	get species(){
	return this._species;
	}
	macksound(){
		console.log(`the ${._species}`makes a sound)
	}
}

class Cat extends Animal {
	purr() {
    console.log("purr");
  }
}
class Dog extends Animal {
  // Method specific to Dog
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
