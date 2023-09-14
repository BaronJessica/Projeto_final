class AdoptionCenter {
  constructor(name) {
    this.name = name;
    this.availableDogs = [];
  }

  addDog(dog) {
    this.availableDogs.push(dog);
  }

  removeDog(dog) {
    const index = this.availableDogs.indexOf(dog);
    if (index !== -1) {
      this.availableDogs.splice(index, 1);
    }
  }

  showAvailableDogs() {
    console.log(`Cães disponíveis para adoção no centro ${this.name}:`);
    this.availableDogs.forEach((dog) => {
      console.log(`Nome: ${dog.name}, Idade: ${dog.age}, Cor: ${dog.color}`);
    });
  }

  reserveDog(user, dog) {
    if (user.isLoggedIn()) {
      if (!dog.adopted) {
        user.addReservedDog(dog);
        console.log(`${user.name} reservou ${dog.name} para adoção.`);
      } else {
        console.log(`${dog.name} já foi adotado.`);
      }
    } else {
      console.log(
        `${user.name} não está logado. Portanto, não reservou nenhum cão.`
      );
    }
  }
}
module.exports = AdoptionCenter;
