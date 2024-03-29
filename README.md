# Colour Palette Generator

As part of the preparation for the Founders and Coders bootcamp, we were given the optional task of creating a colour palette generator using HTML, CSS and JavaScript.

![Colour palette generator showing a pink monochromatic palette in different shades](https://github.com/halimahexe/ColourPalette/assets/127022084/390cb324-6872-4db7-9fa1-8ce1c9f083cc)

The requirements were as follows:

### Required features

- [x] Built with HTML, CSS & JS
- [x] Code hosted on GitHub
- [x] Deployed to GitHub Pages
- [x] Auto-generate multiple colours
- [x] Allow users to change each colour

### Optional features 

- [ ] Export colour palette in different formats (e.g. JSON, CSS variables)
- [x] Generate related colours rather than random (e.g. ascending lightness, complementary hues etc)
- [ ] Save palettes to localStorage

## Description

This is my attempt at that. I have taken inspiration from [Coolors](https://coolors.co/) and set up a page which has 5 colours that are generated upon loading and whenever the spacebar is pressed.

### Features so far

- [x] Auto-generates five colours on load
- [x] Users can click hex code to bring up a colour picker to change each colour
- [x] On desktop, pressing spacebar will generate a new palette; on mobile, pressing the generate button will do the same
- [x] When hovering over the hex code, the background changes slightly (darker on light backgrounds and lighter on dark backgrounds)
- [x] Added pastel, complementary, analogous and monochromatic colour generators
- [x] Implemented a HSL to Hex conversion function using code from [CSS Tricks](https://css-tricks.com/converting-color-spaces-in-javascript/#aa-hsl-to-rgb) - I felt this was needed as the `input[type="color"]` wasn't registering the HSL codes and the HSL felt quite busy on the page

## WIP

I have worked through all of the required features and some optional features but they do require finessing. The code I have to generate colours seems quite repetitive to me and they don't all work entirely as I'd like. However, I would like to make it an option to export the colour palettes and save them to localStorage.

### Still to come

- [ ] Fix monochromatic generator as if the value is beyond 100, it doesn't quite work
- [ ] Make it possible to copy specific colours
- [ ] Add option to export palettes
- [ ] Add option to save palette to localStorage
- [ ] Add a modal to tell users how to use the generator

### Stretch goals

- [ ] Upload photos to pick main colours
- [ ] Lock in colours
