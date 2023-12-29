// Characters that make up hex code
const chars = 'abcdef0123456789';

// Generate button
const genBtn = document.querySelector('#generate');

// Colour boxes
const colourOne = document.querySelector("#colour-1");
const colourTwo = document.querySelector("#colour-2");
const colourThree = document.querySelector("#colour-3");
const colourFour = document.querySelector("#colour-4");
const colourFive = document.querySelector("#colour-5");

// Text boxes that correspond to colour boxes
const textOne = document.querySelector("#text-1");
const textTwo = document.querySelector("#text-2");
const textThree = document.querySelector("#text-3");
const textFour = document.querySelector("#text-4");
const textFive = document.querySelector("#text-5");

// Colour pickers that correspond to colour boxes
const pickOne = document.querySelector("#pick-1");
const pickTwo = document.querySelector("#pick-2");
const pickThree = document.querySelector("#pick-3");
const pickFour = document.querySelector("#pick-4");
const pickFive = document.querySelector("#pick-5");

// Function to create random colours as hex codes

function randHexCol(boxColour, boxText, pick) {
    let hexCode = '#';

    for (let i = 0; i < 6; i++) {
        hexCode += chars[Math.floor(Math.random() * chars.length)];
    }

    boxColour.style.backgroundColor = hexCode;
    boxText.innerText = hexCode;
    pick.value = hexCode;
}

// Function to create random colours as HSL codes

function randomHSL(boxColour, boxText, pick) {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);

    let hslColour = `hsl(${h}, ${s}%, ${l}%)`

    if (l > 36) {
        boxText.classList.add('is-light');
    }

    
}

function pastels(boxColour, boxText, pick) {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = 80 // This says how light the colour should be, so you can set it as a specific lightness to only get pastels!

    let hslColour = `hsl(${h}, ${s}%, ${l}%)`;

    boxColour.style.backgroundColor = hslColour;
    boxText.innerText = hslColour;
    pick.value = hslColour;
}

function generatePastels() {
    pastels(colourOne, textOne, pickOne);
    pastels(colourTwo, textTwo, pickTwo);
    pastels(colourThree, textThree, pickThree);
    pastels(colourFour, textFour, pickFour);
    pastels(colourFive, textFive, pickFive);
}

// Function to generate colours for all five boxes

function generate() {
    randHexCol(colourOne, textOne, pickOne);
    randHexCol(colourTwo, textTwo, pickTwo);
    randHexCol(colourThree, textThree, pickThree);
    randHexCol(colourFour, textFour, pickFour);
    randHexCol(colourFive, textFive, pickFive);
}

// Event listener for spacebar to generate new palette

document.addEventListener("keydown", function(e) {
    if (e.key === " ") {
        generate()
    };
});

// Event listener for clicking `Generate` button to create new palette

genBtn.addEventListener("click", function(e) {
    generate();
})

// Event listener for new colour picked which will affect the background colour and hex code listed

document.addEventListener("change", function(e) {
    const number = e.target.id.match(/\d/);
    const newColour = document.querySelector(`#colour-${number}`);
    const newText = document.querySelector(`#text-${number}`);

    newColour.style.backgroundColor = e.target.value;
    newText.innerText = e.target.value;
})

generate();
