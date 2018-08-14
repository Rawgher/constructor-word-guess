// contains Letter constructor 
// constructor displays underlying character or blank space (underscore) if letter was guessed or not
// constructor should define: store underlying character, boolean if letter has been guessed, function returning underlying character if its guess, or place underscore if not guessed yet
// takes character and checks it against underlying character, updates stored boolean value t otrue if guess correctly

let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function Letter(characters) {
    this.characters = characters;
    this.guess = false;

    if (!(alpha.includes(characters))) {
        this.guess = true;
    };
};