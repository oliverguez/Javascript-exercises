let ninjas = ['oliver', 'banda', 'jorge'];

console.log(ninjas[1]);

//replace
ninjas[1] = 'kevin';

let ages = ['20','30','25'];
let random = ['oliver','30'];


//lenght
console.log(ninjas.length);

//Array methods

    //Joing in a single string
    let resultJoin = ninjas.join(',');

    //Position in the array
    let resultIndex = ninjas.indexOf('oliver');

    //Concatenate arrays

    let resultConcat = ninjas.concat(ages);
    console.log(resultConcat);

    //insert in array

    let resultPush = ninjas.push('nacho');
    console.log(ninjas);

    //take the end value
    let resultPop =  ninjas.pop();
    console.log(resultPop)