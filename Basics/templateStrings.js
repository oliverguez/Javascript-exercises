const title = "Best reads of 2019";
const author = "Oliver";
const likes = 30;

//Concat way
let result = "the blog called " + title + "by" + author + "has" + likes + "likes";

//template way
let result = `the blog called ${title} by ${author} has ${likes} likes`


//creating html templates    

let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span> this blog has ${likes}</span>
`
;
