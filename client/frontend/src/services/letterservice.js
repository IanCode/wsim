 export default class LetterService {
    constructor(letter, guessStatus) {
        this.letter = letter;
        console.log(`LetterService letter: ${this.letter}`);
        this.guessStatus = guessStatus;
        //console.log(`LetterService guessStatus: ${this.guessStatus}`);
        // letter can be a guessed letter, or if none, it
        // will default to the blank square
    }
}