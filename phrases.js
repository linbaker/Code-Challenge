const { moduleExpression } = require("@babel/types");

//let textSample = "This is a phrase. I am now going to mess with the repitition. Now this is also a phrase. Three word phrase. What is I add punctuation 'Three word phrase'. Now I am going to have a odd case tHree WoRD pHRase! So many letters."

class Phrases {
    constructor(textSample) {
        this.textSample = textSample.toLowerCase();
        this.phrasesMap = new Map();
    }

    get orderedPhrases () {
        const sortedMap = new Map([...this.groupedMap.entries()].sort((a, b) => b[1] - a[1]));
        // console.log('ordered', sortedMap);
        // console.log('list', sortedMap.keys(), Array.from(sortedMap.keys()))
        return Array.from(sortedMap.keys());
    }

    //Using lazy getter to prevent needing to call expensive groupPhrases method multiple times
    get groupedMap () {
        Object.defineProperty (this, "groupedMap", 
            { value: this.groupPhrases()})
        return this.groupedMap
    }

    groupPhrases () {
        let wordArray = this.textSample.split(/\s+/g);
        for (let i = 0; i < wordArray.length - 2; i++) {
            //Removing punction at this point to prevent accidenatlly removing a \n whitespace prior to split. Not the tidiest regex as I am explicitly excluding all ASCII punction instead of specify what to keep as [^a-zA-Z0-9_.-] and [^\w\s] stripped accented letters
            let threeWordPhrase = (wordArray[i] + ' ' + wordArray[i+1] + ' ' + wordArray[i+2]).replace(/[\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g, '');
            if (this.phrasesMap.has(threeWordPhrase)) {
                let count = this.phrasesMap.get(threeWordPhrase)+1;
                this.phrasesMap.set(threeWordPhrase, count)
            } else {
                this.phrasesMap.set(threeWordPhrase, 1)
            }
        }
        // console.log(this.phrasesMap.entries())
        return this.phrasesMap
    };




    

}


module.exports = Phrases;