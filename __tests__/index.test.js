require('jest');
const { expect } = require('@jest/globals');
const Phrases = require('../index.js');

describe('Phrases', () => {

    test('should correctly create a map of thee word phrases', () => {
        const testText = "This is a phrase.\nI \nam now going to mess with the repitition. Now\nthis is also a phrase. Threeeee word phrase. What is I\nadd punctuation 'Three\nword phrases'. Now I am going to have a\nodd case tHree WoRD pHRase! So many letters.";
        const phrases = new Phrases(testText);
        expect(phrases.groupPhrases().size).toEqual(43);
      });

    test('should correctly return map with size 1 if text contains only three words', () => {
        const testText = "I am three";
        const phrases = new Phrases(testText);
        expect(phrases.groupPhrases().size).toEqual(1);
    });

    test('should correctly return map with size 1 if text contains only three words', () => {
        const testText = "Only three";
        const phrases = new Phrases(testText);
        expect(phrases.groupPhrases().size).toEqual(0);
    });

    test('should return equal map size for string with "\n" and " " whitespace', () => {
        const testText = "This is a phrase.\nI \nam now going to mess with the repitition. Now\nthis is also a phrase. Threeeee word phrase. What is I\nadd punctuation 'Three\nword phrases'. Now I am going to have a\nodd case tHree WoRD pHRase! So many letters.";
        const phrases = new Phrases(testText);
        expect(phrases.groupPhrases().size).toEqual(43);
    });

    test('should increment map value for every repeated three word', () => {
        const testText = "Three word phrase THrEE WoRd phrase check three three word phrase";
        const phrases = new Phrases(testText);
        const testMap = phrases.groupedMap;
        expect(testMap.get('three word phrase')).toEqual(3);
        expect(testMap.get('check three three')).toEqual(1);
    });
    
    test('should disregard punctuation when matching 3 letter phrases', () => {
        const testText = "Thr?!?!?ee wor.#d&& phrase() THrEE WoRd phrase check three --thr'ee word phr+==$#%ase";
        const phrases = new Phrases(testText);
        const testMap = phrases.groupedMap;
        expect(testMap.get('three word phrase')).toEqual(3);
        expect(testMap.get('check three three')).toEqual(1);
    });

    test('should consider character accent mark when looking for matches', () => {
        const testText = "Thr?!?!?eÉ wor.#d&& phrase() THréE WoRd phrase check three --thr'ee word phr+==$#%ase";
        const phrases = new Phrases(testText);
        expect(phrases.groupedMap.get('three word phrase')).toEqual(1);
    });

    test('should consider character accent mark when looking for matches', () => {
        const testText = "Thr?!?!?ee wor.#d&& phrase()-- 2 two is here THrEE WoRd phrase --thr'ee word phr+==$#%ase Two is here equal to three equal to three equal to three";
        const phrases = new Phrases(testText);
        expect(phrases.orderedPhrases()).toEqual(1);
    });

});