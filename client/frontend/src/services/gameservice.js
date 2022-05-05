import LetterService from "./letterservice";

export default class GameService {
    constructor(size) {
        this.initializeGame(size);
    }

    initializeGame(size)
    {
        // to start, select a random solution word from a small list.
        let words = ['this', 'that', 'pool', 'worm', 'hold', 'bold', 'sold', 'sham', 'chat', 'stop'];
        let solutionIndex = Math.floor(Math.random() * words.length);
        //this.solutionWord = words[solutionIndex];
        // console.log(solutionIndex);
        // console.log(words.length);
        this.solutionWord = words[solutionIndex];
        
        console.log(`Solution Word is: ${this.solutionWord}`);
    }

    handleGuess(guess)
    {
        let result = [];
        console.log(`Handling guess: ${guess}`);
        for(let i = 0; i < guess.length; i++)
        {
            if(guess[i] == this.solutionWord[i]) {
                //green
                result.push(new LetterService(guess[i], "correct"));
            }
            else if(this.solutionWord.includes(guess[i])) {
                //yellow
                result.push(new LetterService(guess[i], "close"));
            }
            else {
                //grey
                result.push(new LetterService(guess[i], "wrong"));
            }
        }

        return result;
    }

}