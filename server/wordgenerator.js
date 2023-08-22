module.exports = {
    generateWord: function() {
        const fs = require('fs');
        const wordListPath = require('word-list');
        const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

        let fourLetterWords = [];
        let word = "";
        for(let num = 0; num < wordArray.length; num++) {
            if(wordArray[num].length == 4) {
                fourLetterWords.push(wordArray[num]);
            }
        }
        let random = Math.floor(Math.random() * fourLetterWords.length);
        word = fourLetterWords[random];
        console.log(`Solution word is: ${word}`);
        return word;
    }
}