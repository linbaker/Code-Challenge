require('jest');
const Phrases = require('../index.js');

describe('Phrases', () => {

    test('should correctly create a map of thee word phrases', () => {
        const testText = "This is a phrase. I am now going to mess with the repitition. Now this is also a phrase. Three word phrase. What is I add punctuation 'Three word phrase'. Now I am going to have a odd case tHree WoRD pHRase! So many letters.";
        const phrases = new Phrases(testText)
        expect(phrases.groupPhrases().size).toEqual(43)
      });

    test('should correctly return map with size 1 if text contains only three words', () => {
        const testText = "I am three";
        const phrases = new Phrases(testText)
        expect(phrases.groupPhrases().size).toEqual(1)
    });

    test('should correctly return map with size 1 if text contains only three words', () => {
        const testText = "Only three";
        const phrases = new Phrases(testText)
        expect(phrases.groupPhrases().size).toEqual(0)
    });

    test('should return equal map size for string with "\n" and " " whitespace', () => {
        const testText = "This is a phrase.\nI \nam now going to mess with the repitition. Now\nthis is also a phrase. Three word phrase. What is I\nadd punctuation 'Three\nword phrase'. Now I am going to have a\nodd case tHree WoRD pHRase! So many letters.";;
        const phrases = new Phrases(testText)
        expect(phrases.groupPhrases().size).toEqual(43)
    });
    

});