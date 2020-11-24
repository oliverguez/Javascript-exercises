

//function declaration
function greet()
{
    console.log('hello')
}


//function expression
const speak =  function()
{
    console.log('good day')

};

speak();
greet();


//arguments and parameters

function name(name, time)
{
    console.log(`hola ${name} ${time}`)
}

name('oliver', '1.28 pm')

// return

const calcArea =  function(radius)
{
    let area = 3.1416 * radius**2;
    return area;

}

const area = calcArea(4);
console.log(area);

//arrow function

const calcAreaArrow = (radius) => 
{

    return 3.1416*radius**2

};

const calcAreaArrowSimple = radius => 3.1416*radius**2;
 


const bill = (products, taxi) => 
{
    let total = 0;
    for(let i=0;i<products.lenght; i++)
    {
        total += products[i]+products[i]*taxi;

    }
    return total;
}
///

const myFunc = (callbackFunc) => 
{
    let value = 50;
    callbackFunc(value);
};

myFunc(value =>{

        console.log(value)
});

//

let people = ['oliver', 'adrian','rodriguez', 'rodriguez']


people.forEach((person, index) => {
    console.log(person, index)
});

//

const ul = document.querySelector('.people');
 let html = ``;
people.forEach((person) =>{
    html += `<li style="color:red">${person}</li>`
})

console.log(html)
ul.innerHTML = html;