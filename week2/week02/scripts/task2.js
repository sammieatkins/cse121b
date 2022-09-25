/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const name = "Sammie";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = name;

// Step 3: declare and instantiate a variable to hold the current year
let thisYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = thisYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let picture = "sammie.png"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src","images/sammie.png");



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const foods = [" pizza"," raspberries"," ezekiel bread"," smoothies"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerHTML = foods;

// Step 3: declare and instantiate a variable to hold another favorite food
let fav = " strawberries";

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(fav);

// Step 5: repeat Step 2
document.querySelector("#food").innerHTML = foods;

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = foods;

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = foods;


