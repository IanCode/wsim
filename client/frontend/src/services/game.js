import Letter from "../components/letter";

export default class Game {
    constructor(size) {
        this.initializeGame(size);
        this.size = size;
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
        this.numGuesses = 0;
        this.maxGuesses = this.solutionWord.length - 1; //gross
        console.log(`Solution Word is: ${this.solutionWord}`);
    }

    handleGuess(guess)
    {
        let result = [];
        console.log(`Handling guess: ${guess}`);
        
        for(let i = 0; i < guess.length; i++)
        {
            let uniqueId = `${numGuesses}${i}`; 
            let letter = guess[i];
            if(guess[i] == this.solutionWord[i]) {
                //green
                result.push(
                    <Letter 
                        key={uniqueId} 
                        guessStatus="correct"
                        xCoord={numGuesses} 
                        yCoord={i} 
                        letter={letter} />
                );
            }
            else if(this.solutionWord.includes(guess[i])) {
                //yellow
                result.push(
                    <Letter 
                        key={uniqueId} 
                        guessStatus="close"
                        xCoord={numGuesses} 
                        yCoord={i} 
                        letter={letter} />
                );

            }
            else {
                //grey
                result.push(
                    <Letter 
                        key={uniqueId} 
                        guessStatus="wrong"
                        xCoord={numGuesses} 
                        yCoord={i} 
                        letter={letter} />
                );
            }
        }

        this.numGuesses++;
        return result;
    }

}