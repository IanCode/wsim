import Letter from "../components/letter";

export default class Game {
    constructor(size) {
        this.size = size;
        // to start, select a random solution word from a small list.
        let words = ['this', 'that', 'pool', 'worm', 'hold', 'bold', 'sold', 'sham', 'chat', 'stop'];
        let solutionIndex = Math.floor(Math.random() * words.length);
        //this.solutionWord = words[solutionIndex];
        // console.log(solutionIndex);
        // console.log(words.length);
        this.solutionWord = words[solutionIndex];
        this.numGuesses = 0;
        this.maxGuesses = this.solutionWord.length; //gross
        //console.log(`Solution Word is: ${this.solutionWord}`);

    }

    handleGuess(guess)
    {
        let result = [];
        console.log(`Handling guess: ${guess}`);
        
        for(let i = 0; i < guess.length; i++)
        {
            let uniqueId = `${this.numGuesses}${i}`; 
            let letter = guess[i];
            if(guess[i] == this.solutionWord[i]) {
                //green
                result.push(
                    {
                        key: uniqueId,
                        guessStatus: "correct",
                        xCoord: this.numGuesses,
                        yCoord: i,
                        letter: letter
                    }
                    // <Letter 
                    //     key={uniqueId} 
                    //     guessStatus="correct"
                    //     xCoord={this.numGuesses} 
                    //     yCoord={i} 
                    //     letter={letter} />
                );
            }
            else if(this.solutionWord.includes(guess[i])) {
                //yellow
                result.push(
                    {
                        key: uniqueId,
                        guessStatus: "close",
                        xCoord: this.numGuesses,
                        yCoord: i,
                        letter: letter
                    }
                    // <Letter 
                    //     key={uniqueId} 
                    //     guessStatus="close"
                    //     xCoord={this.numGuesses} 
                    //     yCoord={i} 
                    //     letter={letter} />
                );

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
                    // <Letter 
                    //     key={uniqueId} 
                    //     guessStatus="wrong"
                    //     xCoord={this.numGuesses} 
                    //     yCoord={i} 
                    //     letter={letter} />
                );
            }
        }

        this.numGuesses++;
        return result;
    }

}