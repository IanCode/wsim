
export default class GameService {
    constructor() {
        // to start, select a random solution word from a small list.
        let words = ['this', 'that', 'pool', 'worm', 'hold', 'bold', 'sold', 'sham', 'chat', 'stop'];
        let solutionIndex = Math.random(words.length);
        this.solution = words[solutionIndex];
    }
}