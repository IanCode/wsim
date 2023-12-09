import React from 'react';
import './letter.tsx';
import Letter from './letter.tsx';
import Header from './header.js';
import Game from '../services/game.ts';
import Keyboard from './keyboard.js';
import NameForm from './nameform.js';
import menuButton from '../images/menu.svg';
import Board from '../services/board.js';
import InfoModal from './infomodal.js';
import GameResultModal from './gameresultmodal.js';
import GithubLogo from '../github.svg';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.size = 4;
        this.currentGuess = "";
        this.fullGuess = false;
        this.flyoutAnimation = false;
        this.flyoutName = `flyout__grid__container`;
        let game = props.game;
        let board = new Board(this.size);
        this.state = {
            game: game,
            board: board,
            showResultModal: false
        };
        console.log("Using the dev tools allows you to cheat at the game! That's pretty neat.");
        console.log("Solution word: " + game.solutionWord);
    }

    render() {
        console.log(`rendering wongame: ${this.state.game.wonGame}`);
        console.log(`rendering showresultmodal: ${this.state.showResultModal}`);
        let boardName = `board__grid__container ${this.size}`;
        let renderedBoard = this.state.board.renderedBoard;
        let gameResultModal;
        if(this.state.showResultModal) {
            gameResultModal = <GameResultModal wonGame={this.state.game.wonGame} />
        }
        return(
            <div className='modal__container'>
                <div className='header__grid__container'>
                    <div className="flyout__button__container">
                        <img className="flyout__hamburger" src={menuButton} onClick={() => this.flyoutClicked()}/>
                    </div>
                    <div className="main__title__container">
                        <h3>Word Game</h3>
                    </div>
                    <div className="logo__right__container">
                        <a href='https://github.com/IanCode/wsim' className='cursorpointer'>
                            <img src={GithubLogo}></img>
                        </a>
                    </div>
                </div>
                <div className='modal__container'>
                <InfoModal />
                
                {gameResultModal}
                    <div className="main__grid__container">
                    <div className="game__container">
                        <div className={boardName}>
                            {renderedBoard}
                        </div>
                    </div>
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
                </div>
                </div>
            </div>

        );
    }

    keyPressed(letter) {
        if(letter == "enter") {
            this.submitGuess();
        }
        else if(letter == "delete") {
            this.deleteLetter();
        }
        else {
            this.handleLetter(letter);
        }
    }

    submitGuess() {
        console.log('A word was submitted: ' + this.currentGuess);
        console.log(`guess number: ${this.state.game.numGuesses}`);
        if(this.currentGuess.length == 0) {
            return;
        }
        if(this.state.game.numGuesses > this.state.game.maxGuesses)
        {
            alert("no more guesses allowed foo");
            return;
        }

        let currentBoard = this.state.board;
        var result = this.state.game.handleGuess(this.currentGuess);
        currentBoard.setRow(this.state.game.numGuesses - 1, result);
        let newBoard = new Board(this.size);
        newBoard.size = currentBoard.size;
        newBoard.renderedBoard = currentBoard.renderedBoard;

        console.log("loogging new board:::::");
        newBoard.logBoard();
        this.currentGuess = "";
        this.fullGuess = false;

        let showResModal = false;
        if(this.state.game.numGuesses >= this.state.game.maxGuesses || this.state.game.wonGame)
        {
            showResModal = true;
        }
        this.setState({board: newBoard, showResultModal: showResModal});
    }

    deleteLetter() {
        if(this.state.game.numGuesses >= this.state.game.maxGuesses || this.state.game.wonGame)
        {
            //don't allow delete if the game is over
            return;
        }
        if(this.currentGuess.length > 0) {
            this.currentGuess = this.currentGuess.slice(0, -1);
        }
        let currentGuessWithTrailingSpaces = this.currentGuess;
        while(currentGuessWithTrailingSpaces.length < this.size) {
            currentGuessWithTrailingSpaces += " ";
        }
        console.log(`currentGuessWithTrailingSpaces: |${currentGuessWithTrailingSpaces}|`);
        let currentBoard = this.state.board;
        currentBoard.updateRow(this.state.game.numGuesses, currentGuessWithTrailingSpaces);
        let newBoard = new Board(this.size);
        newBoard.size = currentBoard.size;
        newBoard.renderedBoard = currentBoard.renderedBoard;
        if(this.currentGuess.length < this.size) {
            this.fullGuess = false;
        }
        this.setState({board: newBoard});
    }

    handleLetter(letter) {
        console.log(`letter pressed: ${letter}`);
        if(this.state.game.maxGuesses == this.state.game.numGuesses) {
            console.log("game over");
            return;
        }
        if(!this.fullGuess) {
            this.currentGuess += letter;
            console.log(`current guess: ${this.currentGuess}`);
            if(this.currentGuess.length == this.size) {
                this.fullGuess = true;
            }
            let currentGuessWithTrailingSpaces = this.currentGuess;
            while(currentGuessWithTrailingSpaces.length < this.size) {
                currentGuessWithTrailingSpaces += " ";
            }
            console.log(`currentGuessWithTrailingSpaces: |${currentGuessWithTrailingSpaces}|`);
            let currentBoard = this.state.board;
            currentBoard.updateRow(this.state.game.numGuesses, currentGuessWithTrailingSpaces);
            let newBoard = new Board(this.size);
            newBoard.size = currentBoard.size;
            newBoard.renderedBoard = currentBoard.renderedBoard;
            this.setState({board: newBoard});
        }
        else {
            console.log("max number of letters in current guess");
        }
    }

    flyoutClicked() {
        
        this.flyoutAnimation = !this.flyoutAnimation;

        if(this.flyoutAnimation) {
            this.flyoutName = "flyout__grid__container animate__in";
            console.log("animate in");
        }
        else {
            this.flyoutName = "flyout__grid__container";
            console.log("animate out");
        }

        this.setState({});
    }
}