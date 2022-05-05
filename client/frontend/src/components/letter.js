import React from 'react';

export default class Letter extends React.Component {
    render() {
        // https://www.npmjs.com/package/number-to-words
        var converter = require('number-to-words');

        var xCoord = converter.toWords(this.props.xCoord);
        var yCoord = converter.toWords(this.props.yCoord);
        console.log(`Letter props.guessStatus: ${this.props.guessStatus}`);
        var tileName = `tile ${this.props.guessStatus} column__${xCoord} row__${yCoord}`;

        var letter = this.props.letter;

        return (
            <div className={tileName}>
                <h1>{letter}</h1>
            </div>
        );
    }
}