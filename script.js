// Characters that make up hex code
// const chars = 'abcdef0123456789';

// Buttons
const genBtn = document.querySelector('#generate');
const pastelBtn = document.querySelector('#pastels');
const compBtn = document.querySelector('#complementary');
const anaBtn = document.querySelector('#analogous');

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

// function randomHex(boxColour, boxText, pick) {
//     let hexCode = '#';

//     for (let i = 0; i < 6; i++) {
//         hexCode += chars[Math.floor(Math.random() * chars.length)];
//     }

//     boxColour.style.backgroundColor = hexCode;
//     boxText.innerText = hexCode;
//     pick.value = hexCode;
// }

// Function to create random colours as HSL codes

function randomHSL(boxColour, boxText, pick) {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);

    let hslColour = `hsl(${h}, ${s}%, ${l}%)`

    isLight(boxText, l);

    boxColour.style.backgroundColor = hslColour;
    boxText.innerText = hslColour;
    pick.value = hslColour;
}

// Function to change colour of text depending on how light the generated background colour is

function isLight(boxText, l) {
    if (l > 36) {
        boxText.classList.add('is-light');
    } else {
        boxText.classList.remove('is-light');
    }
}

// Function to create pastel colours

function pastels(boxColour, boxText, pick) {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 30) + 70;

    let hslColour = `hsl(${h}, ${s}%, ${l}%)`;

    isLight(boxText, l);

    boxColour.style.backgroundColor = hslColour;
    boxText.innerText = hslColour;
    pick.value = hslColour;
}

// Event listener and function to generate pastels

pastelBtn.addEventListener('click', function generatePastels() {
    pastels(colourOne, textOne, pickOne);
    pastels(colourTwo, textTwo, pickTwo);
    pastels(colourThree, textThree, pickThree);
    pastels(colourFour, textFour, pickFour);
    pastels(colourFive, textFive, pickFive);
});

// Function to generate colours for all five boxes

function generate() {
    randomHSL(colourOne, textOne, pickOne);
    randomHSL(colourTwo, textTwo, pickTwo);
    randomHSL(colourThree, textThree, pickThree);
    randomHSL(colourFour, textFour, pickFour);
    randomHSL(colourFive, textFive, pickFive);
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
