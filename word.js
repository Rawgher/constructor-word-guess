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

Word.prototype.youWin = function () {
    for (let h = 0; h < this.letters.length; h++) {
        if (!this.letters[h].guess) {
            return false;
        }
    }
    return true;
}

Word.prototype.checkIt = function (character) {
    let correct = true;
    for (let j = 0; j < this.letters.length; j++) {
        if (this.letters[i].checkGuesses(character)) {
            correct = true;
        }
    }

    if (correct) {
        console.log("You got one!");
        return true;
    } else {
        console.log("Wrong! Try again!");
        return false;
    }
}

Word.prototype.showIt = function () {
    console.log("\n" + this.letters.join(" ") + "\n");
}

module.exports = Word;