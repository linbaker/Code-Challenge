const { moduleExpression } = require("@babel/types");

//let textSample = "This is a phrase. I am now going to mess with the repitition. Now this is also a phrase. Three word phrase. What is I add punctuation 'Three word phrase'. Now I am going to have a odd case tHree WoRD pHRase! So many letters."

class Phrases {
    constructor(textSample) {
        this.textSample = textSample.toLowerCase();
        this.phrasesMap = new Map();
    }

    groupPhrases () {
        let wordArray = this.textSample.split(/\s+/g);
        for (let i = 0; i < wordArray.length - 2; i++) {
            let threeWordPhrase = wordArray[i] + ' ' + wordArray[i+1] + ' ' + wordArray[i+2];
            if (this.phrasesMap.has(threeWordPhrase)) {
                let count = this.phrasesMap.get(threeWordPhrase)+1;
                this.phrasesMap.set(threeWordPhrase, count)
            } else {
                this.phrasesMap.set(threeWordPhrase, 1)
            }
        }
        return this.phrasesMap
    };


    

}


module.exports = Phrases;