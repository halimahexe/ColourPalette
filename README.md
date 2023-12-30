# Colour Palette Generator

As part of the preparation for the Founders and Coders bootcamp, we were given the optional task of creating a colour palette generator using HTML, CSS and JavaScript.

The requirements are as follows:

### Required features 
1. Built with HTML, CSS & JS
1. Code hosted on GitHub
1. Deployed to GitHub Pages
1. Auto-generate multiple colours
1. Allow users to change each colour|

### Optional features 
1. Export colour palette in different formats (e.g. JSON, CSS variables)
1. Generate related colours rather than random (e.g. ascending lightness, complementary hues etc)
1. Save palettes to localStorage

## Description

This is my attempt at that. I have taken inspiration from [Coolors](https://coolors.co/) and set up a page which has 5 colours that are generated upon loading and whenever the spacebar is pressed.

### Features so far

- Auto-generates five colours on load
- Users can click hex code to bring up a colour picker to change each colour
- On desktop, pressing spacebar will generate a new palette; on mobile, pressing the generate button will do the same
- When hovering over the hex code, the background changes slightly (darker on light backgrounds and lighter on dark backgrounds)
- Pastel colour generator
- Implemented a HSL to Hex conversion function using code from [CSS Tricks](https://css-tricks.com/converting-color-spaces-in-javascript/#aa-hsl-to-rgb) - I felt this was needed as the `input[type="color"]` wasn't registering the HSL codes and the HSL felt quite busy on the page

## WIP

Now that I have the required features, I'd like to work on the optional features. I think, instead of hex codes, I will have to use HSL to generate colours that are related rather than random.

### Still to come

- Generate related colours, such as monochromatic, analogous, complementary and pastel palettes (I think I will have to switch to hsl for this)
- Make the text colour of the label change from white to black depending on the hue of the background colour
- Add a popup of some form to tell users how to use the generator

### Stretch goals

- Upload photos to pick main colours
- Lock in colours