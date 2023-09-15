const AdoptionCenter = require("./adoption-center");
const Dog = require("./dog");
const User = require("./user");

test("Criação de instância de AdoptionCenter", () => {
  const center = new AdoptionCenter("Caramel Dogs");
  expect(center.name).toBe("Caramel Dogs");
  expect(center.availableDogs).toHaveLength(0);
});

test("Adicionar cães ao AdoptionCenter", () => {
  const center = new AdoptionCenter("Caramel Dogs");
  const dog1 = new Dog("Rex", 3, "Caramelo");
  const dog2 = new Dog("Lola", 2, "Caramelo");

  center.addDog(dog1);
  center.addDog(dog2);

  expect(center.availableDogs).toContain(dog1);
  expect(center.availableDogs).toContain(dog2);
});

test("Remover cães do AdoptionCenter", () => {
  const center = new AdoptionCenter("Caramel Dogs");
  const dog1 = new Dog("Rex", 3, "Caramelo");
  const dog2 = new Dog("Lola", 2, "Caramelo");

  center.addDog(dog1);
  center.addDog(dog2);

  center.removeDog(dog1);

  expect(center.availableDogs).not.toContain(dog1);
  expect(center.availableDogs).toContain(dog2);
});
