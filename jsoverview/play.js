const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser =  (userName, userAge, userHasHobby) => {
  return('Name is: ' + userName + ', age is: '+ userAge + ', has hobbies? ' + userHasHobby);
}

const add = (a, b) => {
  return a + b;
}

console.log(add(2,6));

console.log(summarizeUser('Yadnyesh', 37, true));