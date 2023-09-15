const AdoptionCenter = require("../src/adoption-center");
const Dog = require("../src/dog");
const User = require("../src/user");

// instâncias de cães
const dog1 = new Dog("Rex", 3, "Caramelo");
const dog2 = new Dog("Lola", 2, "Caramelo");
const dog3 = new Dog("Max", 4, "Caramelo");

//centro de adoção
const adoptionCenter = new AdoptionCenter("Caramel Dogs");

// Adicione cães ao centro de adoção
adoptionCenter.addDog(dog1);
adoptionCenter.addDog(dog2);
adoptionCenter.addDog(dog3);

adoptionCenter.showAvailableDogs();

//  usuários com senhas
const user1 = new User("Alice", "senha123");
const user2 = new User("Bob", "senha456");

// Usuários fazem login
user1.login("senha123");
user2.login("senha789"); // Senha incorreta

// Reservando cães
function reserveDog(user, dog) {
  if (user.isLoggedIn()) {
    if (!dog.adopted) {
      adoptionCenter.reserveDog(user, dog);
    } else {
      console.log(`${dog.name} já foi adotado.`);
    }
  } else {
    console.log(
      `${user.name} não está logado. Portanto, não reservou nenhum cão.`
    );
  }
}

reserveDog(user1, dog2);
reserveDog(user2, dog1);
user1.showReservedDogs();

// Adotando um cão
function adoptDog(user, dog) {
  if (user.isLoggedIn()) {
    if (!dog.adopted) {
      adoptionCenter.reserveDog(user, dog);
      dog.adopt();
      user.addAdoptedDog(dog);
      console.log(`${user.name} adotou ${dog.name}. Parabéns pela adoção!`);
    } else {
      console.log(`${dog.name} já foi adotado.`);
    }
  } else {
    console.log(
      `${user.name} não está logado. Portanto, não adotou nenhum cão.`
    );
  }
}

adoptDog(user1, dog3);

user1.showAdoptedDogs();
