const colours = {
    one: ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    two: ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    three: ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    four: ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    five: ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    six: ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
}

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
    let digitOne = colours.one[Math.floor(Math.random() * colours.one.length)];
    let digitTwo = colours.two[Math.floor(Math.random() * colours.two.length)];
    let digitThree = colours.three[Math.floor(Math.random() * colours.three.length)];
    let digitFour = colours.four[Math.floor(Math.random() * colours.four.length)];
    let digitFive = colours.five[Math.floor(Math.random() * colours.five.length)];
    let digitSix = colours.six[Math.floor(Math.random() * colours.six.length)];
    let hexCode = `#${digitOne}${digitTwo}${digitThree}${digitFour}${digitFive}${digitSix}`
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