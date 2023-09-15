const Dog = require("./dog");
describe("Dog", () => {
  let dog;

  beforeEach(() => {
    dog = new Dog("Rex", 3, "Caramelo");
  });

  test("Deve criar uma instância de Dog", () => {
    expect(dog.name).toBe("Rex");
    expect(dog.age).toBe(3);
    expect(dog.color).toBe("Caramelo");
    expect(dog.adopted).toBe(false);
  });

  test("Deve definir um cão como adotado", () => {
    dog.adopt();
    expect(dog.adopted).toBe(true);
  });

  test("Deve latir corretamente", () => {
    const consoleSpy = jest.spyOn(console, "log");
    dog.bark();
    expect(consoleSpy).toHaveBeenCalledWith("Rex latiu: Woof Woof!");
    consoleSpy.mockRestore();
  });
});
