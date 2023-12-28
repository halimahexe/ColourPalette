# Colour Palette Generator

As part of the preparation for the Founders and Coders bootcamp, we were given the optional task of creating a colour palette generator using HTML, CSS and JavaScript.

The requirements are as follows:

### Required features 
1. Built with HTML, CSS & JS
1. Code hosted on GitHub
1. Deployed to GitHub Pages
1. Auto-generate multiple colours
1. Allow users to change each colour.

### Optional features 
1. Export colour palette in different formats (e.g. JSON, CSS variables)
1. Generate related colours rather than random (e.g. ascending lightness, complementary hues etc)
1. Save palettes to localStorage

## Description

This is my attempt at that. I have taken inspiration from [Coolors](https://coolors.co/) and set up a page which has 5 colours that are generated upon loading and whenever the spacebar is pressed.

## WIP

I still have to add functionality so that users can select individual colours and change them to suit their needs. I plan to use an `input type="color"` to achieve this, which will then modify the background-color of the parent element.