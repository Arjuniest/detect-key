console.log("Keep typing");


const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");


textBox.addEventListener('keydown' , event => 
output.textContent = `You pressed "${event.key}".`);


//It was my first time learning about arrow functions so wanted to see it in action. 

/* Instead of function(event), you write (event) => 
*/
