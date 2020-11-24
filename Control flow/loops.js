

//for loops

const names = ['oliver', 'jorge','banda'];

for(let i = 0; i < names.length; i++)
{
    console.log(names[i])
    let html = `
    <div>${names[i]}</div>
    `
    console.log(html)

}
console.log('for loop finished')


//while loops

let i = 0;
while(i < 3)
{
    console.log(names[i] + ' jaja que feo')
    i += 1 ;
}

//do while
let a = 0;
do
{
    console.log(names[a] + 'jaja que feo el do');
    a++;
}
while(a <3);


//if else else if

const age = 20;

if(age < 20)
{
    console.log('tengo mas de 20');
}else if(age >20)
{
    console.log('jaja que feo')
}else
{
    console.log('xd')
}


if(names.length > 1)
{
    console.log('mucho chango')
}


// or and
const password = "contraseña12345@sd!aaaa"
if(password.length <= 12 && password.includes('@'))
{
    console.log('ta chila la pass')
}else if(password.length>= 14 || password.includes('!'))
{
    console.log('esta esta mejor');
}

//switch case
    const grade = 'A';
    switch(grade)
    {
        case 'A':
            console.log('tienes A');
            break;
        case 'C':
            console.log('tienes B')
            break;
        case 'D':
            console.log('tienes C')
            break;
        case 'E':
            console.log('tienes D')
            break;
        default:
            console.log('not a valid grade')
            break;




    }