class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
    this.loggedIn = false;
    this.reservedDogs = [];
    this.adoptedDogs = [];
  }

  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
    }
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  addReservedDog(dog) {
    this.reservedDogs.push(dog);
  }

  addAdoptedDog(dog) {
    this.adoptedDogs.push(dog);
  }

  showReservedDogs() {
    console.log(`${this.name} reservou os seguintes cães:`);
    this.reservedDogs.forEach((dog) => {
      console.log(`Nome: ${dog.name}, Idade: ${dog.age}, Cor: ${dog.color}`);
    });
  }

  showAdoptedDogs() {
    console.log(`${this.name} adotou os seguintes cães:`);
    this.adoptedDogs.forEach((dog) => {
      console.log(`Nome: ${dog.name}, Idade: ${dog.age}, Cor: ${dog.color}`);
    });
  }
}

module.exports = User;
