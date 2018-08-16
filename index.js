let Word = require("./word.js")
let fs = require("fs");
let inquirer = require("inquirer");

// randomly select words and use Word constructor to store it
// prompt user for each guess and keeps track of remaining guesses

// need to set up a JSON.parse of my secret words file
let word;
let quessesLeft;
let play;
let guessed;
let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

