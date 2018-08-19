// setting up require files
let Word = require("./word.js")
let fs = require("fs");
let inquirer = require("inquirer");

// setting up new variables
let secretWord;
let guessesLeft;
let play;
let guessed;
let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// grabbing word used from secretWords.json file
let txtWord = JSON.parse(fs.readFileSync('secretWords.json', 'utf8')).word;

// setting up game start function
let start = function () {

    // if play is set to true, this function will run to play the game
    if (play) {

        inquirer.prompt([

            {
                name: "letters",
                message: "Try guessing a letter!"
            }

        ]).then(function (args) {

            // setting up a variable to recognize users input
            let guess = args.letters[0];

            // if statement that runs if the the user has not guessed a letter, the letter is allowed, and the letter is not in the word
            if (!guessed.includes(guess) && alpha.includes(guess) && !secretWord.refresh(guess)) {

                guessesLeft--;
                guessed += guess;
                console.log("You have " + guessesLeft + " guesses left");

            }

            // else if statement that runs if the user tries to input a wrong letter second time
            else if (guessed.includes(guess)) {

                console.log("You've already used that letter. Try another!");
                guessesLeft;

            }

            // showing the secret word on the console after a letter has been guessed
            secretWord.showIt();

            // if statement that will stop the game from running if the guesses left drop to 0. will ask the user if they would like to play again
            if (guessesLeft < 1) {

                play = false;
                console.log("You lost! Better luck next time.");
                newGame();

            };

            // if statement that stops the game if the user gets the word right. will ask the user if they would like to play again
            if (secretWord.youWin()) {

                play = false;
                console.log("Good job! You did it!");
                newGame();

            };

            // if statement will run the main game function as long as play is set to true
            if (play) {

                start();

            };

        });

    };

};

// prompting user to play new game or not. if yes, runs function again, if no, takes them out of node
function newGame() {

    inquirer.prompt([

        {
            type: "rawlist",
            name: "question",
            message: "Want to play again?",
            choices: ["Yes", "No"]
        }

    ]).then(function (arg) {

        if (arg.question == "Yes") {
            play = true;
            setItUp();
        };

    });

};


// setting up parameters of the game when user starts
function setItUp() {

    let randomWord = Math.floor(txtWord.length * Math.random());
    secretWord = new Word(txtWord[randomWord]);
    guessesLeft = 8;
    play = true;
    guessed = "";
    secretWord.showIt();
    start();

}

// runs intial set up of game when node index.js is called
setItUp();