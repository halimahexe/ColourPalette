const chars = 'abcdef0123456789';

const colourOne = document.querySelector("#colour-one");
const colourTwo = document.querySelector("#colour-two");
const colourThree = document.querySelector("#colour-three");
const colourFour = document.querySelector("#colour-four");
const colourFive = document.querySelector("#colour-five");
const textOne = document.querySelector("#text-one");
const textTwo = document.querySelector("#text-two");
const textThree = document.querySelector("#text-three");
const textFour = document.querySelector("#text-four");
const textFive = document.querySelector("#text-five");
const pickOne = document.querySelector("#pick-one");
const pickTwo = document.querySelector("#pick-two");
const pickThree = document.querySelector("#pick-three");
const pickFour = document.querySelector("#pick-four");
const pickFive = document.querySelector("#pick-five");

// document.onload = instructions();

// function instructions() {
//     alert("Hello!");
// }

function randCol(boxColour, boxText, pick) {
    let hexCode = '#';

    for (let i = 0; i < 6; i++) {
        hexCode += chars[Math.floor(Math.random() * chars.length)];
    }

    boxColour.style.backgroundColor = hexCode;
    boxText.innerText = hexCode;
    pick.value = hexCode;
}

function generate() {
    randCol(colourOne, textOne, pickOne);
    randCol(colourTwo, textTwo, pickTwo);
    randCol(colourThree, textThree, pickThree);
    randCol(colourFour, textFour, pickFour);
    randCol(colourFive, textFive, pickFive);
}

generate();

document.addEventListener("keydown", function(e) {
    if (e.key === " ") {
        generate()
    };
});