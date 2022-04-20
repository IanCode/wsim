import React from 'react';

export default class Letter extends React.Component {
    render() {
        var converter = require('number-to-words');

        
        var xCoord = converter.toWords(this.props.xCoord);
        var yCoord = converter.toWords(this.props.yCoord);

        var tileName = `tile ${this.props.guessStatus} column__${xCoord} row__${yCoord}`;

        return (
            <div className={tileName}>
                
            </div>
        );
    }
}