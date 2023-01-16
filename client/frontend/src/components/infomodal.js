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
                    <h5 className='nopadding'>In today's fast-moving world, nobody has time for 5 letter word games... With this, you get all 
                        the fun of traditional Wordle in a bite-sized package!
                    </h5>
                    <h5 className='nopadding'>
                        Small Wordle is still in development, you'll notice bugs and unfinished parts. 
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