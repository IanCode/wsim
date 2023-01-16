import React from 'react';

export default class GameResultModal extends React.Component {
    constructor(props) {
        super(props);
        let show = this.props.showModal;
        let result = this.props.wonGame;
        // let isVisible = "hidden";
        // console.log(`props.showresultModal: ${this.props.showModal}`);
        // if(this.props.showModal) {
        //     isVisible = "";
        // }

        this.text = "";
        if(this.props.wonGame) {
            this.text = "Congratulations, you won!";
        }
        else {
            this.text = "Better luck next time.";
        }
        this.state = {
            modalVisible: ""
        };
    }

    render() {
        return (
            // <div className='modal__overlay'>
                <div className={`info__modal ${this.state.modalVisible}`} key="somekey">
                    <h3 className='nopadding'>{this.text}</h3>
                    <div className='button' onClick={() => this.hideModal()}>Ok</div>
                </div>
            // </div>
        );
    }

    hideModal() {
        console.log("hidemodal clicked");
        this.setState({modalVisible: "hidden"});
    }
}