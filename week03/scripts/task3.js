/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
    return parseFloat(number1) + parseFloat(number2);
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
    let number1 = document.querySelector("#addend1").value;
    let number2 = document.querySelector("#addend2").value;
    let sum = add(number1, number2);
    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector("#sum").value = sum;
    console.log(sum);
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
    return parseFloat(number1) - parseFloat(number2);
}
function subtractNumbers() {
    let number1 = document.querySelector("#minuend").value;
    let number2 = document.querySelector("#subtrahend").value;
    let difference = subtract(number1, number2);

    document.querySelector("#difference").value = difference;
    console.log(difference);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1, number2) {
    return parseFloat(number1) * parseFloat(number2);
}
function mulitplyNumbers() {
    let number1 = document.querySelector("#factor1").value;
    let number2 = document.querySelector("#factor2").value;
    let product = multiply(number1, number2);

    document.querySelector("#product").value = product;
    console.log(product);
}
document.querySelector("#multiplyNumbers").addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
    return parseFloat(number1) / parseFloat(number2);
}
function divideNumbers() {
    let number1 = document.querySelector("#dividend").value;
    let number2 = document.querySelector("#divisor").value;
    let quotient = divide(number1, number2);

    document.querySelector("#quotient").value = quotient;
    console.log(quotient);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date().getDate();

// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
let year = new Date().getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").innerHTML = year;


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = array;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
var odds = array.filter(number => {
    return number % 2 !== 0;
});
document.querySelector("#odds").innerHTML = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
var evens = array.filter(number => {
    return number % 2 === 0;
});
document.querySelector("#evens").innerHTML = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector("#sumOfArray").innerHTML = array.reduce(sumArray);
function sumArray(total, num) {
    return total + num;
}

// Step 6: Use the map array method to multiply each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
function timesTwo(x) {
    return x * 2;
}
document.querySelector("#multiplied").innerHTML = array.map(timesTwo);

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector("#sumOfMultiplied").innerHTML = array.map(double).reduce(addArray);
function double(x) {
    return x * 2;
}
function addArray(total, num) {
    return total + num
}