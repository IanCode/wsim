const fs = require('fs');
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
for(let num = 0; num < 100; num++) {
    console.log(`wordarray[${num}]: ${wordArray[num]}`);
}
let fourLetterWords = [];
for(let num = 0; num < wordArray.length; num++) {
    if(wordArray[num].length == 4) {
        process.stdout.write(`${wordArray[num]}, `);
        fourLetterWords.push(wordArray[num]);
    }
}