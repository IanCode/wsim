
export default class LetterService {
    constructor(letter) {
        this.letter = letter;
        
        this.guessStatus = "blank";
        // letter can be a guessed letter, or if none, it
        // will default to the blank square
    }
}