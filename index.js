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
            //Removing punction at this point to prevent accidenatlly removing a \n whitespace prior to split. Not the tidiest regex as I am explicitly excluding all ASCII punction instead of specify what to keep as [^a-zA-Z0-9_.-] and [^\w\s] stripped accented letters
            let threeWordPhrase = (wordArray[i] + ' ' + wordArray[i+1] + ' ' + wordArray[i+2]).replace(/[\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g, '');
            // console.log(threeWordPhrase)
            if (this.phrasesMap.has(threeWordPhrase)) {
                let count = this.phrasesMap.get(threeWordPhrase)+1;
                this.phrasesMap.set(threeWordPhrase, count)
            } else {
                this.phrasesMap.set(threeWordPhrase, 1)
            }
        }
        console.log(this.phrasesMap.entries())
        return this.phrasesMap
    };


    

}


module.exports = Phrases;