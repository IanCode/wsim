
export default class LetterService {
    constructor(letter) {
        this.letter = letter;
        console.log(`LetterService letter: ${this.letter}`);
        this.guessStatus = "blank";
        // letter can be a guessed letter, or if none, it
        // will default to the blank square
    }
}