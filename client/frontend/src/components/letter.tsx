import React from 'react';
import { GuessStatus } from '../models/guessstatus';

declare function require(name: string);

export default class Letter extends React.Component<{ letter: string, guessStatus: GuessStatus, xCoord: number, yCoord: number}>{
    render() {
        // https://www.npmjs.com/package/number-to-words
        var converter = require('number-to-words');

        var yCoord = converter.toWords(this.props.xCoord);
        var xCoord = converter.toWords(this.props.yCoord);
        //console.log(`Letter props.guessStatus: ${this.props.guessStatus}`);
        var tileName = `tile ${this.props.guessStatus} column__${xCoord} row__${yCoord}`;

        var letter = this.props.letter;

        return (
            <div className={tileName}>
                <h1 className='game__letter'>{letter}</h1>
            </div>
        );
    }
}