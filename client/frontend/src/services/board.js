import React from 'react';
import Letter from '../components/letter.js';

export default class Board {
    constructor(size) {
        //super(props);
        this.size = size;
        //this.letters = [];
        this.renderedBoard = this.initializeBoard();
        this.logBoard();
    }

    // render() {
    //     var boardName = `board__grid__container ${this.size}`;
    //     var renderedBoard = this.makeBoard();
    //     return(
    //         <div className={boardName}>
    //             {renderedBoard}
    //         </div>
    //     );
    // }

    updateRow(rowNumber, newPartialGuess) {
        console.log(`Updating row: ${rowNumber}`);
        let newRow = [];
        for(let i = 0; i < newPartialGuess.length; i++)
        {
            let uniqueId = `${rowNumber}${i}`; 
            newRow.push
            (
                <Letter 
                    key={uniqueId} 
                    guessStatus="blank"
                    xCoord={rowNumber} 
                    yCoord={i} 
                    letter={newPartialGuess[i]} />
            );
        }
        console.log(`newRow: ${newRow}`);
        this.renderedBoard[rowNumber] = newRow;
        this.logBoard();
    }

    setRow(rowNumber, row) {
        console.log(`setrow newRow: ${row}`);
        let newRow = [];
        for(let i = 0; i < row.length; i++) {
            newRow.push
            (
                <Letter
                    key={row[i].uniqueId}
                    guessStatus={row[i].guessStatus}
                    xCoord={row[i].xCoord}
                    yCoord={row[i].yCoord}
                    letter={row[i].letter} />
            );
        }
        this.renderedBoard[rowNumber] = newRow;
        this.logBoard();
    }
    // componentDidMount() {
    // }
  
    // componentWillUnmount() {
    // }



    initializeBoard() {
        let letters = [];
        for(let i = 0; i < this.size; i++) {
            letters[i] = [];
            for(let j = 0; j < this.size; j++) {
                let uniqueId = `${i}${j}`;
                letters[i].push
                (
                    <Letter 
                        key={uniqueId} 
                        guessStatus="blank"
                        xCoord={i} 
                        yCoord={j} 
                        letter=" " />
                );
            }
        }
        return letters;
    }

    logBoard() {
        console.log(this.renderedBoard);
        var boardString = `
${this.renderedBoard[0][0].props.letter} ${this.renderedBoard[0][1].props.letter} ${this.renderedBoard[0][2].props.letter} ${this.renderedBoard[0][3].props.letter}
${this.renderedBoard[1][0].props.letter} ${this.renderedBoard[1][1].props.letter} ${this.renderedBoard[1][2].props.letter} ${this.renderedBoard[1][3].props.letter}
${this.renderedBoard[2][0].props.letter} ${this.renderedBoard[2][1].props.letter} ${this.renderedBoard[2][2].props.letter} ${this.renderedBoard[2][3].props.letter}
${this.renderedBoard[3][0].props.letter} ${this.renderedBoard[3][1].props.letter} ${this.renderedBoard[3][2].props.letter} ${this.renderedBoard[3][3].props.letter}
        `;
        var boardString = `
        ${this.renderedBoard[0][0].props.guessStatus} ${this.renderedBoard[0][1].props.guessStatus} ${this.renderedBoard[0][2].props.guessStatus} ${this.renderedBoard[0][3].props.guessStatus}
        ${this.renderedBoard[1][0].props.guessStatus} ${this.renderedBoard[1][1].props.guessStatus} ${this.renderedBoard[1][2].props.guessStatus} ${this.renderedBoard[1][3].props.guessStatus}
        ${this.renderedBoard[2][0].props.guessStatus} ${this.renderedBoard[2][1].props.guessStatus} ${this.renderedBoard[2][2].props.guessStatus} ${this.renderedBoard[2][3].props.guessStatus}
        ${this.renderedBoard[3][0].props.guessStatus} ${this.renderedBoard[3][1].props.guessStatus} ${this.renderedBoard[3][2].props.guessStatus} ${this.renderedBoard[3][3].props.guessStatus}
                `;
//         var boardString = `
// ${this.renderedBoard[0].props.letter} ${this.renderedBoard[1].props.letter} ${this.renderedBoard[2].props.letter} ${this.renderedBoard[3].props.letter}
// ${this.renderedBoard[4].props.letter} ${this.renderedBoard[5].props.letter} ${this.renderedBoard[6].props.letter} ${this.renderedBoard[7].props.letter}
// ${this.renderedBoard[8].props.letter} ${this.renderedBoard[9].props.letter} ${this.renderedBoard[10].props.letter} ${this.renderedBoard[11].props.letter}
// ${this.renderedBoard[12].props.letter} ${this.renderedBoard[13].props.letter} ${this.renderedBoard[14].props.letter} ${this.renderedBoard[15].props.letter}
//         `;
        
        console.log(boardString);
    }
}