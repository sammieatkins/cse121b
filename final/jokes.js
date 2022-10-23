const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke");

// use api to get joke
async function fetchJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    const data = response.json();
    return data;
}

// display joke and reaction from api when button is clicked
async function handleClick() {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    let reaction = document.querySelector("#reaction");
    reaction.textContent = randomItemFromArray(reactions, reaction.textContent)
}
jokeButton.addEventListener("click", handleClick);

// get a random reaction from the list
const reactions = [
    "ugh",
    "🤦🏻‍♂️",
    "seriously",
    "stop it",
    "alright... that was decent",
    "laaaame",
    "that wasn't even funny",
    "🤦🏻‍♂️🤦🏻‍♂️🤦🏻‍♂️🤦🏻‍♂️",
    "try again",
    "*groans*",
    "*eyeroll*"
];
function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (item == not) {
        console.log("Ah! we used that one last time, look again");
        return randomItemFromArray(arr,not);
    }
    let reaction = item;
    return reaction;
}
randomItemFromArray(reactions);