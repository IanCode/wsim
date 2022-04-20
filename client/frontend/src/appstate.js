import BoardService from "./services/boardservice";
import GameService from "./services/gameservice";
import LetterService from "./services/letterservice";


export default class AppState {
    constructor() {
        // to start, select a random solution word from a small list.
        this.game = new GameService();
        this.board = new BoardService(5);
    }
}