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

function randCol(boxColour, boxText) {
    let hexCode = '#';

    for (let i = 0; i < 6; i++) {
        hexCode += chars[Math.floor(Math.random() * chars.length)];
    }

    boxColour.style.backgroundColor = hexCode;
    boxText.innerText = hexCode;
}

function generate() {
    randCol(colourOne, textOne);
    randCol(colourTwo, textTwo);
    randCol(colourThree, textThree);
    randCol(colourFour, textFour);
    randCol(colourFive, textFive);
}

generate();

document.addEventListener("keydown", function(e) {
    if (e.key === " ") {
        generate()
    };
});