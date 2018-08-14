//contains Word constructor
// used to create object representing current word the user is trying to guess
// should contain: array of new letters representing letters from underlying word
//function that returns a string representing the word. should call on each letter object from letter.js shows as underscore and concatenate together
//function takes character as an argument and calls the guess function on each letter from letter.js

let Letter = require("./letter.js");

let alpha = "abcdefghijklmnopqrstuvwxyz";

function Word(secretWord) {
    this.letter = [];
    for (let i=0; i < secretWord.length; i++) {
        this.letter.push(new Letter(secretWord[i]));
    };
};