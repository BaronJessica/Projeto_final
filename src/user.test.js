const User = require("./user");

test("Criação de instância de User", () => {
  const user = new User("Alice", "senha123");
  expect(user.name).toBe("Alice");
  expect(user.password).toBe("senha123");
});

test("Login de usuário com senha correta", () => {
  const user = new User("Alice", "senha123");
  user.login("senha123");
  expect(user.loggedIn).toBe(true);
});

test("Login de usuário com senha incorreta", () => {
  const user = new User("Bob", "senha456");
  user.login("senha789");
  expect(user.loggedIn).toBe(false);
});

test("Reservar um cão", () => {
  const user = new User("Alice", "senha123");
  const dog = { name: "Rex", age: 3, color: "Caramelo" };

  user.login("senha123");
  user.addReservedDog(dog);

  expect(user.reservedDogs).toContainEqual(dog);
});

test("Adotar um cão", () => {
  const user = new User("Alice", "senha123");
  const dog = { name: "Lola", age: 2, color: "Caramelo" };

  user.login("senha123");
  user.addAdoptedDog(dog);

  expect(user.adoptedDogs).toContainEqual(dog);
});
