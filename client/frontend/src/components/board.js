import React from 'react';
import './letter.js';
import Letter from './letter.js';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.board = this.props.appState.board;
        this.size = this.props.appState.board.size;
        this.game = this.props.appState.game;
    }

    // componentDidMount() {
    // }
  
    // componentWillUnmount() {
    // }

    render() {
        var boardName = `board__grid__container ${this.size}`;
        var renderedBoard = this.makeBoard();
        var solutionWord = this.game.solutionWord;

        return(
            <div className={boardName}>
                {renderedBoard}
            </div>
        );
    }

    makeBoard() {
        var letters = []; 
        for(let i = 0; i < this.board.boardArray.length; i++) {
            for(let j = 0; j < this.board.boardArray.length; j++) {
                var uniqueId = `${i}${j}`; 
                console.log(this.board.boardArray[i][j].letter);
                console.log(`Board boardArray.guessStatus: ${this.board.boardArray[i][j].guessStatus}`);
                letters.push
                (
                    <Letter 
                        key={uniqueId} 
                        guessStatus={this.board.boardArray[i][j].guessStatus}
                        xCoord={i} yCoord={j} 
                        letter={this.board.boardArray[i][j].letter}
                    />
                );
            }
        }
        return letters;
    }

}