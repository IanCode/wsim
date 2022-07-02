import React from 'react';
import './letter.js';
import menuButton from '../images/menu.svg';
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
                <div className="flyout__button__container">
                    <img src={menuButton} />
                </div>
                <div className="main__title__container">
                    <h3>Word Game</h3>
                </div>
            </div>
        );
    }

}