var Letters = function(randomSong) {
	this.answerArray= [];
    //for loop to add appropriate number of "_"
    for (var i = 0; i < randomSong.length; i++) {
        this.answerArray[i] = " _";
    }
    //console.log(this.answerArray);

    //send blank spaces to #blankSpaces on page
    //console.log(this.answerArray.join(""));
};

module.exports= Letters