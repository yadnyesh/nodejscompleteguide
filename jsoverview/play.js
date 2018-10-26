const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser =  (userName, userAge, userHasHobby) => {
  return('Name is: ' + userName + ', age is: '+ userAge + ', has hobbies? ' + userHasHobby);
}

console.log(summarizeUser('Yadnyesh', 37, true));