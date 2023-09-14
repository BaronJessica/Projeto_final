class Dog {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.adopted = false;
  }

  bark() {
    console.log(`${this.name} latiu: Woof Woof!`);
  }

  adopt() {
    this.adopted = true;
  }
}

module.exports = Dog;
