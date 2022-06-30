import React from 'react';

export default class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.board = this.props.appState.board;
        this.size = this.props.appState.board.size;
        this.game = this.props.appState.game;
    }

    // componentDidMount() {
    // }
  
    // componentWillUnmount() {
    // }

    render() {
        return(
            <div className='keyboard__grid__container'>
                <div className='keyboard__row one'>
                    <div className='keyboard__button one' onClick={() => this.keyPressed("q")}>Q</div>
                    <div className='keyboard__button two' onClick={() => this.keyPressed("w")}>W</div>
                    <div className='keyboard__button three' onClick={() => this.keyPressed("e")}>E</div>
                    <div className='keyboard__button four' onClick={() => this.keyPressed("r")}>R</div>
                    <div className='keyboard__button five' onClick={() => this.keyPressed("t")}>T</div>
                    <div className='keyboard__button six' onClick={() => this.keyPressed("y")}>Y</div>
                    <div className='keyboard__button seven' onClick={() => this.keyPressed("u")}>U</div>
                    <div className='keyboard__button eight' onClick={() => this.keyPressed("i")}>I</div>
                    <div className='keyboard__button nine' onClick={() => this.keyPressed("o")}>O</div>
                    <div className='keyboard__button ten' onClick={() => this.keyPressed("p")}>P</div>
                </div>
                <div className='keyboard__row two'>
                    <div className='keyboard__button one blank'></div>
                    <div className='keyboard__button two' onClick={() => this.keyPressed("a")}>A</div>
                    <div className='keyboard__button three' onClick={() => this.keyPressed("s")}>S</div>
                    <div className='keyboard__button four' onClick={() => this.keyPressed("d")}>D</div>
                    <div className='keyboard__button five' onClick={() => this.keyPressed("f")}>F</div>
                    <div className='keyboard__button six' onClick={() => this.keyPressed("g")}>G</div>
                    <div className='keyboard__button seven' onClick={() => this.keyPressed("h")}>H</div>
                    <div className='keyboard__button eight' onClick={() => this.keyPressed("j")}>J</div>
                    <div className='keyboard__button nine' onClick={() => this.keyPressed("k")}>K</div>
                    <div className='keyboard__button ten' onClick={() => this.keyPressed("l")}>L</div>
                    <div className='keyboard__button eleven blank'></div>
                </div>
                <div className='keyboard__row three'>
                    <div className='keyboard__button one' onClick={() => this.keyPressed("enter")}>ENTER</div>
                    <div className='keyboard__button two' onClick={() => this.keyPressed("z")}>Z</div>
                    <div className='keyboard__button three' onClick={() => this.keyPressed("x")}>X</div>
                    <div className='keyboard__button four' onClick={() => this.keyPressed("c")}>C</div>
                    <div className='keyboard__button five' onClick={() => this.keyPressed("v")}>V</div>
                    <div className='keyboard__button six' onClick={() => this.keyPressed("b")}>B</div>
                    <div className='keyboard__button seven' onClick={() => this.keyPressed("n")}>N</div>
                    <div className='keyboard__button eight' onClick={() => this.keyPressed("m")}>M</div>
                    <div className='keyboard__button nine' onClick={() => this.keyPressed("delete")}>DELETE</div>
                </div>
            </div>
        );
    }

    keyPressed(letter) {
        this.setState({currentLetter: letter});
    }

}