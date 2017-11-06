//user enters "node hangman.js"
var inquirer = require("inquirer");
// var askQuestions function() {
var Word = require("./words.js");

var Blanks = require("./letters.js");

var rword;

var letters;

//var playGame = function;

//node prompts would you like to play?
inquirer
    .prompt([{
        type: "confirm",
        message: "Hello. Wanna play a game?",
        name: "confirm",
        default: true
    }])
    .then(function(inquirerResponse) {
            // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
            if (!inquirerResponse.confirm) {
                console.log("Fine. Bye!");
            } else {
                console.log("instructions");
                rword = new Word();
                letters = new Blanks(rword.randomWord);
                console.log(letters.answerArray.join(""));
            }
        })

        // if yes, node lists brief instructions 
        // and generates random word
        // then displays corresponding blanks and remaining guesses.
        // as user guesses, either replace blank space with correct letter and console log "YOU GOT IT! 4 GUESSES REMAINING" or "WRONG! ONLY 4 GUESSES REMAINING." 

        // when no guesses remain, console log "YOU BLEW IT. better luck next time."
        // if all letters correctly guessed, log "YAYYYYY you won!"