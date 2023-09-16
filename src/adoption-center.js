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

  reserveDog(user, dog) {
    if (user.isLoggedIn()) {
      if (!dog.adopted) {
        // Remova o cão da lista de cães disponíveis e defina-o como adotado
        this.removeDog(dog);
        dog.adopted = true;

        // Adicione o cão à lista de cães reservados do usuário
        user.addReservedDog(dog);

        return dog;
      } else {
        console.log(`${dog.name} já foi adotado.`);
        return null;
      }
    } else {
      console.log(
        `${user.name}, você não está logado. Faça login para reservar.`
      );
      return null;
    }
  }

  showAvailableDogs() {
    console.log(`Cães disponíveis para adoção no ${this.name}:`);
    this.availableDogs.forEach((dog) => {
      console.log(`${dog.name} - Idade: ${dog.age} anos - Cor: ${dog.color}`);
    });
  }
}

module.exports = AdoptionCenter;
