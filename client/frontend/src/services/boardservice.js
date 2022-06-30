import LetterService from "./letterservice";

export default class BoardService {
    constructor(size, game) {
        //this.gameService = game;
        this.solutionWord = game.solutionWord;
        console.log(this.solutionWord);
        this.initializeBoard(size);
    }

    updateRow(rowNumber, newRow) {
        console.log(`Updating row: ${rowNumber}`);
        this.boardArray[rowNumber] = newRow;
    }

    initializeBoard(size) {
        this.boardArray = new Array();
        for(let i = 0; i < size; i++) {
            this.boardArray[i] = new Array();
            for(let j = 0; j < size; j++) {
                console.log(this.solutionWord.charAt(i));
                this.boardArray[i][j] = new LetterService("", "blank");
            }
        }
    }
}