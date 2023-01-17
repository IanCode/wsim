import Letter from "../components/letter";

export default class Game {
    constructor(size) {

        this.size = size;
        
        // TODO: add a node backend to serve the selected word, help manage game state, etc. 
        // const fs = require('fs');
        // const wordListPath = require('word-list');
        // const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
        // for(let num = 0; num < 100; num++) {
        //     console.log(`wordarray[${num}]: ${wordArray[num]}`);
        // }


        // for now, select a random solution word from a small list.
        let words = ['this', 'that', 'pool', 'worm', 'hold', 'bold', 'sold', 'sham', 'chat', 'stop'];
        let solutionIndex = Math.floor(Math.random() * words.length);
        //this.solutionWord = words[solutionIndex];
        // console.log(solutionIndex);
        // console.log(words.length);
        this.solutionWord = words[solutionIndex];
        this.solutionWord = "sold";
        this.numGuesses = 0;
        this.maxGuesses = this.solutionWord.length; //gross
        this.wonGame = false;
        // do you remember when I told you that the game was working? well that was a lie.
        this.solutionDict = this.createSolutionDict(this.solutionWord);
    }

    handleGuess(guess)
    {
        this.solutionDict = this.createSolutionDict(this.solutionWord);
        let result = [];
        console.log(`Handling guess: ${guess}`);
        
        for(let i = 0; i < guess.length; i++)
        {
            let uniqueId = `${this.numGuesses}${i}`; 
            let letter = guess[i];
            if(guess[i] == this.solutionWord[i]) {

                for(let j = 0; j < this.solutionDict.length; j++) {
                    if(this.solutionDict[j].key == letter) {
                        for(let n = 0; n < this.solutionDict[j].value.length; n++) {
                            if(this.solutionDict[j].value[n] == "close") {
                                //complexity increasing...
                                console.log("complexity increasing...");
                                for(let k = 0; k < result.length; k++) {
                                    if(result[k].letter == letter) {
                                        // what's happening here is we're backtracking
                                        // to find a letter that was previously set to 
                                        // 'close' but now since we've guessed the same letter twice (or more) times
                                        // and hit a 'correct', and we've passed the guess limit for this letter, 
                                        // we're going back and setting that original 'close' guess to 'wrong'
                                        result[k].guessStatus = "wrong";
                                        //TODO: unfortunately this is still broken. If you have a solution with two
                                        // of the same letters, it will still mark the first of the two as grey. 
                                        // needs fix.
                                    }
                                }
                            }
                        }
                        // if(this.solutionDict[j].value <= 0) {

                        // }
                    }
                }
                //green
                result.push(
                    {
                        key: uniqueId,
                        guessStatus: "correct",
                        xCoord: this.numGuesses,
                        yCoord: i,
                        letter: letter
                    }
                );

                // keeps track of how many times we can guess this letter.
                for(let j = 0; j < this.solutionDict.length; j++) {
                    // n^2 complexity is my life now
                    if(this.solutionDict[j].key == letter) {
                        this.solutionDict[j].value -= 1;
                    }
                }
                
            }
            else if(this.solutionWord.includes(guess[i])) {
                // check to see if we can guess this letter
                console.log(`solution word includes ${guess[i]}`);
                for(let j = 0; j < this.solutionDict.length; j++) {
                    if(this.solutionDict[j].key == letter) {
                        let hasBeenPushed = false;
                        for(let n = 0; n < this.solutionDict[j].value.length; n++) {
                            if(this.solutionDict[j].value[n] == "notguessed") {
                                console.log(`solution word ${guess[i]} has not been guessed`);
                                this.solutionDict[j].value[n] = "close";
                                //yellow
                                result.push(
                                    {
                                        key: uniqueId,
                                        guessStatus: "close",
                                        xCoord: this.numGuesses,
                                        yCoord: i,
                                        letter: letter
                                    }
                                );
                                //this.solutionDict[j].value -= 1;
                                hasBeenPushed = true;
                                break;
                            }
                        }
                        if(!hasBeenPushed) {
                            // grey
                            result.push(
                                {
                                    key: uniqueId,
                                    guessStatus: "wrong",
                                    xCoord: this.numGuesses,
                                    yCoord: i,
                                    letter: letter
                                }
                            );
                            hasBeenPushed = true;
                        }
                    }
                }



            }
            else {
                //grey
                result.push(
                    {
                        key: uniqueId,
                        guessStatus: "wrong",
                        xCoord: this.numGuesses,
                        yCoord: i,
                        letter: letter
                    }
                );
            }
        }

        this.numGuesses++;
        console.log(`guess: ${guess} solutionWord: ${this.solutionWord}`);
        console.log(`result: ${result}`);
        if(guess == this.solutionWord) {
            
            console.log("won the game!");
            this.wonGame = true;
        }
        return result;
    }

    createSolutionDict(solutionWord) {
        // it's not really a dictionary, but we'll pretend it is.
        let solutionDict = [];
        //console.log(`word: ${solutionWord}`);
        //n^2 complexity? now THIS is programming...
        //iterate over the solution word by letter
        for(let i = 0; i < solutionWord.length; i++) {
            let letter = solutionWord[i];
            //console.log(`i: ${i} letter: ${letter}`);
            // see if there's already an entry for the given letter
            let letterAlreadyExists = false;
            for(let j = 0; j < solutionDict.length; j++) {
                //console.log(`solutionDict.length: ${solutionDict.length}`);
                //console.log(`solutionDict[j].key: ${solutionDict[j].key}`);
                if(solutionDict[j].key == letter) {
                    //if so, add to that letter's count
                    solutionDict[j].value.push("notguessed");
                    letterAlreadyExists = true;
                }
            }
            // if there's no existing entry, create a new one and add it to the 'dictionary'
            if(!letterAlreadyExists) {
                solutionDict.push(
                    {
                        key: letter,
                        value: ["notguessed"]
                    }
                );
            }
        }

        return solutionDict;
    }

}