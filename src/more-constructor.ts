export {}

class Person {
  public gender: number
  constructor(
    public name: string,
    private age: number
  ) {
    this.gender = 1
  }
}

const jiro = new Person('jiro', 33)
console.log(jiro)
