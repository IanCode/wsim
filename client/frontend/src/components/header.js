import React from 'react';
import './letter.js';
import Letter from './letter.js';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    // }
  
    // componentWillUnmount() {
    // }

    render() {
        return(
            <div className='header__grid__container'>
                <h1>Word Game Swag</h1>
            </div>
        );
    }

}