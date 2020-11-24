console.log(true, false)

///Methods
let email = 'oliver@oliver.com';
let names = ['oliver','banda','jorge','kevin']
//returns true if the character is include in email
let result = email.includes('@')
let resultArray = names.includes('oliver')


let age = 25;

console.log(age == 20);
console.log(age != 20);
console.log('shaun' > 'Shaun'); //true


//Loose comparison

console.log(25 == '25'); //true
console.log(25 != '25'); //false

//Strict comparison (Same value and type)
console.log(age === 25);
console.log(age === '25'); //false
console.log(age !== '25'); //true


