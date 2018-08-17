let Word = require("./word.js")
let fs = require("fs");
let inquirer = require("inquirer");

let word;
let guessesLeft;
let play;
let guessed;
let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

let txtWord = JSON.parse(fs.readFileSync('secretWords.json', 'utf8')).word;

let start = function () {
    if (play) {
        inquirer.prompt([
            {
                name: "letters",
                message: "Try guessing a letter!"
            }
        ]).then(function(args) {
            let guess = args.letters[0];

            if (!guess.includes(guessed) && alpha.includes(guessed) && !word.update(guessed)) {
                guessesLeft--;
                guessed += guess;
                console.log("You have " + guessesLeft + " guesses left");
            }
            
            word.showIt();

            if (guessesLeft < 1) {
                play = false;
                console.log("You lost! Better luck next time.");
                newGame();
            }

            if (word.youWin()) {
                playing = false;
                console.log("Good job! You did it!");
                newGame();
            }

            if (playing) {
                start();
            }
        });
    };
};

function newGame() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "question",
            message: "Want to play again?"
        }
    ]).then(function (arg) {
        if (arg.question.toLowerCase() === "y") {
            playing = true;
            setItUp();
        };
    });
};

function setItUp() {
    let randomWord = Math.floor(txtWord.length * Math.random());
    word = new Word(txtWord[randomWord]);
    guessesLeft = 8;
    playing = true;
    guessed = "";
    word.showIt();
    start();
}

setItUp();

