const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser =  (userName, userAge, userHasHobby) => {
  return('Name is: ' + userName + ', age is: '+ userAge + ', has hobbies? ' + userHasHobby);
}

const add = (a, b) => a + b;
const addRandom = () => 1 + 3;

console.log(add(2,6));
console.log(addRandom());

console.log(summarizeUser('Yadnyesh', 37, true));