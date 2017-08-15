class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`)
    console.log(`My gender is ${this.gender}`)
  }
}
