const groupPhrases = require('../index.js');

describe('groupPhrases', () => {

    test('should correctly create a map of thee word phrases', () => {
        const textSample = "This is a phrase. I am now going to mess with the repitition. Now this is also a phrase. Three word phrase. What is I add punctuation 'Three word phrase'. Now I am going to have a odd case tHree WoRD pHRase! So many letters.";
        expect.groupPhrases(textSample).size.toEqual(43)
      });

});