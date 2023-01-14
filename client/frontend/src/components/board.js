import React from 'react';
import './letter.js';
import Letter from './letter.js';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.size = this.props.size;
        this.initializeBoard();
    }

    render() {
        var boardName = `board__grid__container ${this.size}`;
        var renderedBoard = this.makeBoard();
        return(
            <div className={boardName}>
                {renderedBoard}
            </div>
        );
    }

    updateRow(rowNumber, newRow) {
        console.log(`Updating row: ${rowNumber}`);
        this.boardArray[rowNumber] = newRow;
    }

    // componentDidMount() {
    // }
  
    // componentWillUnmount() {
    // }

    initializeBoard() {
        var letters = []; 
        for(let i = 0; i < this.size; i++) {
            for(let j = 0; j < this.size; j++) {
                var uniqueId = `${i}${j}`;
                console.log(`Board ${i} ${j} letter: ${this.board.boardArray[i][j].letters}`);
                console.log(`Board ${i} ${j} guessStatus: ${this.board.boardArray[i][j].guessStatus}`);
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