// setting up letters that can be used 
let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Letter constructor that will hold the secret word
function Letter(characters) {

    this.characters = characters;
    this.guessedLetter = false;

    // if the a part of the secret word is not part of the alpha variable, it will display them as is
    if (!(alpha.includes(characters))) {
        this.guessedLetter = true;
    };

};

// function set up to change the letters to underscores unless they are guessed
Letter.prototype.toString = function () {

    if (this.guessedLetter) {
        return this.characters;
    }

    return "_";

};

// this will check the letter input and will take either uppercase or lowercase input to compare it to the secret word
Letter.prototype.checkIt = function (check) {

    if (check.toLowerCase() === this.characters || check.toUpperCase() === this.characters) {
        this.guessedLetter = true;
        return true;
    };

    return false;
    
};

module.exports = Letter;