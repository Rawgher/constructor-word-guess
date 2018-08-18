//to do - add function for if they hit the same letter again
//to do - comment everything out
//to do - clean up formatting 

let Word = require("./word.js")
let fs = require("fs");
let inquirer = require("inquirer");

let secretWord;
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

            if (!guessed.includes(guess) && alpha.includes(guess) && !secretWord.refresh(guess)) {
                guessesLeft--;
                guessed += guessed;
                console.log("You have " + guessesLeft + " guesses left");
            }
            
            secretWord.showIt();

            if (guessesLeft < 1) {
                play = false;
                console.log("You lost! Better luck next time.");
                newGame();
            }

            if (secretWord.youWin()) {
                play = false;
                console.log("Good job! You did it!");
                newGame();
            }

            if (play) {
                start();
            }
        });
    };
};

function newGame() {
    inquirer.prompt([
        {
            type: "rawlist",
            name: "question",
            message: "Want to play again?",
            choices: ["Yes","No"]
        }
    ]).then(function (arg) {
        if (arg.question == "Yes") {
            play = true;
            setItUp();
        };
    });
};

function setItUp() {
    let randomWord = Math.floor(txtWord.length * Math.random());
    secretWord = new Word(txtWord[randomWord]);
    guessesLeft = 8;
    play = true;
    guessed = "";
    secretWord.showIt();
    
    start();
}

setItUp();

