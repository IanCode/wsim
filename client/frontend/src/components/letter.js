import React from 'react';

export default class Letter extends React.Component {
    constructor(props) {
        super(props);
        this.letter = this.props.letter;
        //console.log(`LetterService letter: ${this.letter}`);
        this.guessStatus = this.props.guessStatus;
        //console.log(`LetterService guessStatus: ${this.guessStatus}`);
        // letter can be a guessed letter, or if none, it
        // will default to the blank square
    }

    render() {
        // https://www.npmjs.com/package/number-to-words
        var converter = require('number-to-words');

        var xCoord = converter.toWords(this.props.xCoord);
        var yCoord = converter.toWords(this.props.yCoord);
        //console.log(`Letter props.guessStatus: ${this.props.guessStatus}`);
        var tileName = `tile ${this.guessStatus} column__${xCoord} row__${yCoord}`;

        var letter = this.props.letter;

        return (
            <div className={tileName}>
                <h1>{letter}</h1>
            </div>
        );
    }
}