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

function randCol() {
    let digitOne = Math.floor(Math.random() * colours.one.length);
    let digitTwo = Math.floor(Math.random() * colours.two.length);
    let digitThree = Math.floor(Math.random() * colours.three.length);
    let digitFour = Math.floor(Math.random() * colours.four.length);
    let digitFive = Math.floor(Math.random() * colours.five.length);
    let digitSix = Math.floor(Math.random() * colours.six.length);
    let hexCode = `#${digitOne}${digitTwo}${digitThree}${digitFour}${digitFive}${digitSix}`
    colourOne.style.backgroundColor = hexCode;
}

randCol();