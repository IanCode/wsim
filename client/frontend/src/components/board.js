import React from 'react';
import './letter.js';
import Letter from './letter.js';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.board = this.props.appState.board;
        this.size = this.props.size;
    }

    // componentDidMount() {
    // }
  
    // componentWillUnmount() {
    // }

    render() {
        var boardName = `board__grid__container ${this.size}`;
        var renderedBoard = this.makeBoard();
        

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
                letters.push(<Letter key={uniqueId} guessStatus="blank" xCoord={i} yCoord={j}/>);
            }
        }
        return letters;
    }

}