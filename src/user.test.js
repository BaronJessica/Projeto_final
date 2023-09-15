const User = require("./user");

describe("User", () => {
  let user;

  beforeEach(() => {
    user = new User("Alice", "senha123");
  });

  test("Deve criar um usuário com nome e senha", () => {
    expect(user.name).toBe("Alice");
    expect(user.password).toBe("senha123");
    expect(user.loggedIn).toBe(false);
    expect(user.reservedDogs).toHaveLength(0);
    expect(user.adoptedDogs).toHaveLength(0);
  });

  test("Deve fazer login com senha correta", () => {
    user.login("senha123");
    expect(user.loggedIn).toBe(true);
  });

  test("Não deve fazer login com senha incorreta", () => {
    user.login("senha456");
    expect(user.loggedIn).toBe(false);
  });

  test("Deve fazer logout", () => {
    user.login("senha123");
    user.logout();
    expect(user.loggedIn).toBe(false);
  });

  test("Deve adicionar um cão à lista de cães reservados", () => {
    const dog = { name: "Rex", age: 3, color: "Caramelo" };
    user.addReservedDog(dog);
    expect(user.reservedDogs).toContainEqual(dog);
  });

  test("Deve adicionar um cão à lista de cães adotados", () => {
    const dog = { name: "Lola", age: 2, color: "Caramelo" };
    user.addAdoptedDog(dog);
    expect(user.adoptedDogs).toContainEqual(dog);
  });
});
