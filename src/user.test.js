const User = require("./user");

describe("User", () => {
  let user;

  beforeEach(() => {
    user = new User("Alice", "senha123");
  });

  test("Deve criar um usuário com nome, senha e propriedades padrão", () => {
    expect(user.name).toBe("Alice");
    expect(user.password).toBe("senha123");
    expect(user.loggedIn).toBe(false);
    expect(user.reservedDogs).toHaveLength(0);
    expect(user.adoptedDogs).toHaveLength(0);
  });

  test("Deve fazer login com senha correta", () => {
    user.login("senha123");
    expect(user.isLoggedIn()).toBe(true);
  });

  test("Não deve fazer login com senha incorreta", () => {
    user.login("senha456");
    expect(user.isLoggedIn()).toBe(false);
  });

  test("Deve fazer logout", () => {
    user.login("senha123");
    user.logout();
    expect(user.isLoggedIn()).toBe(false);
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

  test("Deve mostrar os cães reservados", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const dog1 = { name: "Rex", age: 3, color: "Caramelo" };
    const dog2 = { name: "Lola", age: 2, color: "Caramelo" };
    user.addReservedDog(dog1);
    user.addReservedDog(dog2);
    user.showReservedDogs();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Alice reservou os seguintes cães:"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Nome: Rex, Idade: 3, Cor: Caramelo"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Nome: Lola, Idade: 2, Cor: Caramelo"
    );

    consoleSpy.mockRestore();
  });

  test("Deve mostrar os cães adotados", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const dog1 = { name: "Rex", age: 3, color: "Caramelo" };
    const dog2 = { name: "Lola", age: 2, color: "Caramelo" };
    user.addAdoptedDog(dog1);
    user.addAdoptedDog(dog2);
    user.showAdoptedDogs();

    expect(consoleSpy).toHaveBeenCalledWith("Alice adotou os seguintes cães:");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Nome: Rex, Idade: 3, Cor: Caramelo"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Nome: Lola, Idade: 2, Cor: Caramelo"
    );

    consoleSpy.mockRestore();
  });
});
