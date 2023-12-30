// INITIALISE VARIABLES

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


// FUNCTIONS

// Function to create random HSL codes

function randomHSL(boxColour, boxText, pick) { // Don't think it makes sense to call `boxColour`, `boxText` and `pick` in this function...
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);
    
    getHex(h, s, l, boxColour, boxText, pick); //
}

// Function to create pastel colours

function pastels(boxColour, boxText, pick) {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 30) + 70;

    getHex(h, s, l, boxColour, boxText, pick);
}

// Function to generate random pastels

function generatePastels() {
    pastels(colourOne, textOne, pickOne);
    pastels(colourTwo, textTwo, pickTwo);
    pastels(colourThree, textThree, pickThree);
    pastels(colourFour, textFour, pickFour);
    pastels(colourFive, textFive, pickFive);
};

// Function to generate random colours for all five boxes

function generate() {
    randomHSL(colourOne, textOne, pickOne);
    randomHSL(colourTwo, textTwo, pickTwo);
    randomHSL(colourThree, textThree, pickThree);
    randomHSL(colourFour, textFour, pickFour);
    randomHSL(colourFive, textFive, pickFive);
}

// Function to generate complementary colours

function complementary() {
    randomHSL(colourOne, textOne, pickOne);
}

function generateComplementary() {

}

// Function to change HSL to Hex

function HSLtoHex(h, s, l) {
    // First convert HSL to RGB
    // I don't fully understand these formulae which I took from CSS Tricks
    
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s; // c is colour intensity
    let x = c * (1 - Math.abs((h / 60) % 2 - 1)); // x is second most intense colour
    let m = l - c/2; // m is lightness
    let r = 0;
    let g = 0;
    let b = 0;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;  
        } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
        }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    
    // RGB to Hex

    r = r.toString(16); // Converts the RGB values to hexadecimal string
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) {
        r = "0" + r;
    }

    if (g.length == 1) {
        g = "0" + g;
    }
    
    if (b.length == 1) {
        b = "0" + b;
    }

    return "#" + r + g + b;
}

// Function to get colour code and then pass that to other functions to avoid repeating code

function getHex(h, s, l, boxColour, boxText, pick) {
    isLight(boxText, l);

    boxColour.style.backgroundColor = HSLtoHex(h, s, l);
    boxText.innerText = HSLtoHex(h, s, l);
    pick.value = HSLtoHex(h, s, l);
};

// Function to change colour of text depending on how light the generated background colour is

function isLight(boxText, l) {
    if (l > 36) {
        boxText.classList.add('is-light');
    } else {
        boxText.classList.remove('is-light');
    }
}


// EVENT LISTENERS

// Initial palette loads once rest of content has loaded

document.addEventListener("DOMContentLoaded", function(e) {
    generate();
})

// Event listener for spacebar to generate new palette

document.addEventListener("keydown", function(e) {
    if (e.key === " ") {
        generate()
    };
})

// Event listener for clicking `Generate` button to create new palette

genBtn.addEventListener("click", function(e) {
    generate();
})

// Event listener for clicking `Pastels` button to create new pastels palette

pastelBtn.addEventListener("click", function(e) {
    generatePastels();
})

// Event listener for new colour picked which will affect the background colour and hex code listed

document.addEventListener("change", function(e) {
    const number = e.target.id.match(/\d/);
    const newColour = document.querySelector(`#colour-${number}`);
    const newText = document.querySelector(`#text-${number}`);

    newColour.style.backgroundColor = e.target.value;
    newText.innerText = e.target.value;
})
