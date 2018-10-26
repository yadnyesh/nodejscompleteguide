const person = {
  name: 'Yadnyesh',
  age: 37,
  greet() {
    console.log('Hi I am ' + this.name);
  }
};

const printName = ({name}) => {
    console.log(name);
}

printName(person);