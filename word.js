// setting up require file
let Letter = require("./letter.js");

// Word constructor function that will take the secret word index and push it to be part of the new Letter constructor
function Word(secretWord) {

    this.letters = [];

    for (let i = 0; i < secretWord.length; i++) {

        this.letters.push(new Letter(secretWord[i]));

    };

};

// function that runs if all the input letters matches the letters in the secret word array
Word.prototype.youWin = function () {

    for (let h = 0; h < this.letters.length; h++) {

        if (!this.letters[h].guessedLetter) {

            return false;

        }

    }

    return true;

}

// function that runs after every letter guess
Word.prototype.refresh = function (characters) {

    let correct = false;

    for (let j = 0; j < this.letters.length; j++) {

        if (this.letters[j].checkIt(characters)) {

            correct = true;

        }

    }

    // runs if the user matches one of the letters in the secret word
    if (correct) {

        console.log("You got one!");
        return true;

    }

    // else statement that runs if the user does not guess one of the letters in the secret word     
    else {

        console.log("Wrong! Try again!");
        return false;

    }

}

// function that inputs the underscores for the secret word with blank lines before and after it
Word.prototype.showIt = function () {

    console.log("\n" + this.letters.join(" ") + "\n");

}

module.exports = Word;