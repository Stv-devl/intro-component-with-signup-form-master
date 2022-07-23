# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./Screenshot/Screenshot.png)

### Links

- Solution URL: [Github code](https://github.com/Stv-devl/intro-component-with-signup-form-master)
- Live Site URL: [You can see here](https://stv-devl.github.io/intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- Javascript

### What I learned

I learned to validate a form in javascript. That was an interesting challenge.

For submit the form :

- The firstname should have between 3 and 20 characters
- The Lastname should have between 3 and 20 characters
- Email should be a valid adress email
- Passord should have a minimum of 8 characters, one capital letter, one number and one special character

When the form is not valid a red icon and an error message will appear to ask the utilisator to fix.
When the form is valid. The data is send(see in consol(log) and you get an alert with a "thank you" message.

### Continued development

I will send a V2 of this form with different features. With a progress bar for the password. And we will have an error message directly when we typing.

## Author

- Website - [Github](https://github.com/Stv-devl)
- Frontend Mentor - [@Stv-devl](https://www.frontendmentor.io/profile/Stv-devl)
