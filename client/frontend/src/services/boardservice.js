import LetterService from "./letterservice";

export default class BoardService {
    constructor(size) {
        this.boardArray = new Array();
        for(let i = 0; i < size; i++) {
            this.boardArray[i] = new Array();
            for(let j = 0; j < size; j++) {
                this.boardArray[i][j] = new LetterService("");
            }
        }
    }

    //handles a guess for a given letter
    handleGuess(letter) {

    }
}