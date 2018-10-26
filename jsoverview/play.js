const person = {
  name: 'Yadnyesh',
  age: 37,
  greet() {
    console.log('Hi I am ' + this.name);
  }
};

// console.log(person);

const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
  console.log(hobby);
}