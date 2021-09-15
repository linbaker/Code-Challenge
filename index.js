const { moduleExpression } = require("@babel/types");

//let textSample = "This is a phrase. I am now going to mess with the repitition. Now this is also a phrase. Three word phrase. What is I add punctuation 'Three word phrase'. Now I am going to have a odd case tHree WoRD pHRase! So many letters."

class Phrases {
    constructor(textSample) {
        this.textSample = textSample;
        this.phrasesMap = new Map();
    }

    groupPhrases () {
        let wordArray = this.textSample.split(' ');
        for (let i = 0; i < wordArray.length - 2; i++) {
            let threeWordPhrase = wordArray[i] + ' ' + wordArray[i+1] + ' ' + wordArray[i+2];
            this.phrasesMap.set(threeWordPhrase, 1)
        }
        return this.phrasesMap
    };

}


module.exports = Phrases;