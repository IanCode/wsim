import React from 'react';

export default class InfoModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: ""
        };
    }

    render() {
        return (
            // <div className='modal__overlay'>
                <div className={`info__modal ${this.state.modalVisible}`}>
                    <h3 className='nopadding'>Welcome to Word Game!</h3>
                    <h5 className='nopadding'>Inspired by a very popular word game, this 
                    version has only four letter words.
                    </h5>
                    <h5 className='nopadding'>
                        This project is still in development, you may notice bugs and unfinished parts. 
                    </h5>
                    <div className='button' onClick={() => this.hideModal()}>Start</div>
                </div>
            // </div>
        );
    }

    hideModal() {
        console.log("hidemodal clicked");
        this.setState({modalVisible: "hidden"});
    }
}