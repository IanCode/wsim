import React from 'react';

export default class Keyboard extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    // }
  
    // componentWillUnmount() {
    // }

    render() {
        return(
            <div className='keyboard__grid__container'>
                <div className='keyboard__row one'>
                    <div className='keyboard__button one'></div>
                    <div className='keyboard__button two'></div>
                    <div className='keyboard__button three'></div>
                    <div className='keyboard__button four'></div>
                    <div className='keyboard__button five'></div>
                    <div className='keyboard__button six'></div>
                    <div className='keyboard__button seven'></div>
                    <div className='keyboard__button eight'></div>
                    <div className='keyboard__button nine'></div>
                    <div className='keyboard__button ten'></div>
                </div>
                <div className='keyboard__row two'>
                    <div className='keyboard__button one blank'></div>
                    <div className='keyboard__button two'></div>
                    <div className='keyboard__button three'></div>
                    <div className='keyboard__button four'></div>
                    <div className='keyboard__button five'></div>
                    <div className='keyboard__button six'></div>
                    <div className='keyboard__button seven'></div>
                    <div className='keyboard__button eight'></div>
                    <div className='keyboard__button nine'></div>
                    <div className='keyboard__button ten'></div>
                    <div className='keyboard__button eleven blank'></div>
                </div>
                <div className='keyboard__row three'>
                    <div className='keyboard__button one'></div>
                    <div className='keyboard__button two'></div>
                    <div className='keyboard__button three'></div>
                    <div className='keyboard__button four'></div>
                    <div className='keyboard__button five'></div>
                    <div className='keyboard__button six'></div>
                    <div className='keyboard__button seven'></div>
                    <div className='keyboard__button eight'></div>
                    <div className='keyboard__button nine'></div>
                </div>
            </div>
        );
    }

}