//setting up letters that can be used 
let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

//
function Letter(characters) {
    this.characters = characters;
    this.guessedLetter = false;

    if (!(alpha.includes(characters))) {
        this.guessedLetter = true;
    };
};

//
Letter.prototype.toString = function () {
    if (this.guessedLetter) {
        return this.characters;
    }
    return "_";
};

//
Letter.prototype.checkIt = function (check) {
    if (check.toLowerCase() === this.characters || check.toUpperCase() === this.characters) {
        this.guessedLetter = true;
        return true;
    };
    return false;
};

module.exports = Letter;