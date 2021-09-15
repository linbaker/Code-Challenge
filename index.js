const { moduleExpression } = require("@babel/types");

//let textSample = "This is a phrase. I am now going to mess with the repitition. Now this is also a phrase. Three word phrase. What is I add punctuation 'Three word phrase'. Now I am going to have a odd case tHree WoRD pHRase! So many letters."


const phrasesMap = new Map();

function groupPhrases (textSample) {
    let wordArray = textSample.split(' ');
    for (let i = 0; i < wordArray.length - 2; i++) {
        let threeWordPhrase = wordArray[i] + ' ' + wordArray[i+1] + ' ' + wordArray[i+2];
        phrasesMap.set(threeWordPhrase, 1)
    }
	return phrasesMap
};

module.exports = groupPhrases;