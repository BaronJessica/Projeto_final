const Dog = require("./dog");

test("Criação de instância de Dog", () => {
  const dog = new Dog("Rex", 3, "Caramelo");
  expect(dog.name).toBe("Rex");
  expect(dog.age).toBe(3);
  expect(dog.color).toBe("Caramelo");
  expect(dog.adopted).toBe(false);
});

test("Método adopt()", () => {
  const dog = new Dog("Max", 4, "Caramelo");
  dog.adopt();
  expect(dog.adopted).toBe(true);
});
