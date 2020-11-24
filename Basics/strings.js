//Strings
console.log('Hello');
let email = 'correo@correo.com';

///String concatenation

let firstName = 'Oliver';
let lastName = 'Rodriguez';
let fullName = firstName +'' +lastName;

//getting characters
console.log(fullName[0]); //retorna el primer caracter

//String lenght
console.log(fullName.length);

//String methods
    console.log(fullName.toUpperCase());
    let result = fullName.toLowerCase();
    console.log(result);

    //Encuentra la posicion
    let index = email.indexOf('@');


//common string methods
let correo = 'correo@correo.com';

    //La ultima posicion del caracter
    let result2 =  correo.lastIndexOf('n')

    //Corta (primera posicion, ultima posicion)
    let resultSlice = correo.slice(0,10)

    //Corta pero el segundo argumento dice cuantos despueds parar.
    let resultSubstr = correo.substr(0,10)

    //remplaza el primer caracter que se encuentre y lo remplaza con el segundoa argumento
    let resultReplace = correo.replace('c', 'k');