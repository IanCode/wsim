import LetterService from "./letterservice";

export default class BoardService {
    constructor(size, game) {
        this.gameService = game;
        this.solutionWord = game.solutionWord;
        console.log(this.solutionWord);
        this.boardArray = new Array();
        for(let i = 0; i < size; i++) {
            this.boardArray[i] = new Array();
            for(let j = 0; j < size; j++) {
                console.log(this.solutionWord.charAt(i));
                this.boardArray[i][j] = new LetterService(this.solutionWord[i]);
            }
        }
    }

    //handles a guess for a given letter
    handleGuess(letter) {

    }
}