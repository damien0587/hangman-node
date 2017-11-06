var wordArray = ["formation", "platinum", "flawless", "queen", "elevator", "twins", "irreplaceable", "countdown", "solange", "lemonade", "superbowl", "blonde", "houston", "bootylicious"];

var Word = function() {
    this.randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    //console.log(this.randomWord);
}

module.exports = Word;