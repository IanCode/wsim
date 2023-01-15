import React from 'react';
import './letter.js';
import Letter from './letter.js';
import Header from './header.js';
import Game from '../services/game.js';
import Keyboard from './keyboard.js';
import NameForm from './nameform.js';
import menuButton from '../images/menu.svg';
import Board from '../services/board.js';
import InfoModal from './infomodal.js';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        //this.game = 
        //this.board = new Board(4);
        

        this.size = 4;
        this.currentGuess = "";
        this.fullGuess = false;
        this.flyoutAnimation = false;
        this.flyoutName = `flyout__grid__container`;
        let game = props.game;
        //let game = new Game(this.size);
        let board = new Board(this.size);
        this.state = {
            game: game,
            board: board
        };
        console.log("Using the dev tools allows you to cheat at the game! That's pretty neat.");
        console.log("Solution word: " + game.solutionWord);
    }

    // componentDidMount() {
    // }
  
    // componentWillUnmount() {
    // }

    render() {
        console.log("rendering");
        let boardName = `board__grid__container ${this.size}`;
        let renderedBoard = this.state.board.renderedBoard;
        //var renderedBoard = this.renderBoard();
        //var solutionWord = this.game.solutionWord;

        return(
            <div className='modal__container'>
                <div className='modal__container'>
                <InfoModal />
                    <div className="main__grid__container">
                    
                    <div className='header__grid__container'>
                        <div className="flyout__button__container">
                            <img className="flyout__hamburger" src={menuButton} onClick={() => this.flyoutClicked()}/>
                        </div>
                        <div className="main__title__container">
                            <h3>Small Wordle</h3>
                        </div>
                    </div>
                    <div className={this.flyoutName}>
                        <div className='flyout__row one'></div>
                        <div className='flyout__row two'>this is a flyout</div>
                        <div className='flyout__row three'>it doesn't do anything</div>
                        <div className='flyout__row four'>but i bet you could</div>
                        <div className='flyout__row five'>imagine a world where</div>
                        <div className='flyout__row six'>it does do something</div>
                        {/* <div className='flyout__row seven'>wouldn't that be something</div> */}
                        <div className='flyout__row eight'></div>
                    </div>
                    <div className="game__container">
                        <div className={boardName}>
                            {renderedBoard}
                        </div>
                        {/* <Board size="4" /> */}
                        {/* <Keyboard appState={this.state.appState}/> */}
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
                    {/* <NameForm appState={this.state.appState}/> */}
                    {/* <div className='test__input__grid__container'>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Name:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div> */}
                </div>
                </div>
            </div>

        );
    }

    keyPressed(letter) {
        //this.setState({currentLetter: letter});
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
        this.setState({board: newBoard});
        //console.log(result);
        // for(let i = 0; i < result.length; i++) {
        //     console.log(`solution: ${this.state.game.solutionWord}, ${i} ${result[i].letter}: ${result[i].guessStatus}`);
        // }

        //this.setState({});
        //event.preventDefault();
    }

    deleteLetter() {
        if(this.currentGuess.length > 0) {
            this.currentGuess = this.currentGuess.slice(0, -1);
        }
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
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }

    // updateRow(rowNumber, newRow) {
    //     console.log(`Updating row: ${rowNumber}`);
    //     for(let j = 0; j < this.boardArray[rowNumber].size; j++) {
    //         //console.log(this.solutionWord.charAt(i));
    //         this.boardArray[i][j] = new LetterService("", "blank");
    //     }
    //     this.board.boardArray[rowNumber] = newRow;
    //     this.setState({});
    // }

    // renderBoard() {
    //     var letters = []; 
    //     for(let i = 0; i < this.board.boardArray.length; i++) {
    //         for(let j = 0; j < this.board.boardArray.length; j++) {
    //             var uniqueId = `${i}${j}`; 
    //             //console.log(this.board.boardArray[i][j].letter);
    //             //console.log(`Board boardArray.guessStatus: ${this.board.boardArray[i][j].guessStatus}`);
    //             letters.push
    //             (
    //                 <Letter 
    //                     key={uniqueId} 
    //                     guessStatus={this.board.boardArray[i][j].guessStatus}
    //                     xCoord={j} yCoord={i} 
    //                     letter={this.board.boardArray[i][j].letter}
    //                 />
    //             );
    //         }
    //     }
    //     return letters;
    // }

    // handleSubmit(event) {
    //     try {
    //         console.log(`guess number: ${this.game.numGuesses}`);
    //         if(this.appState.game.numGuesses > this.game.maxGuesses)
    //         {
    //         alert("no more guesses allowed foo");
    //         }
    //         var result = this.appState.game.handleGuess(this.state.value);
    //         //alert('A word was submitted: ' + this.state.value);
    //         this.appState.board.updateRow(0, result);
    //         //console.log(result);
    //         for(let i = 0; i < result.length; i++) {
    //             console.log(`solution: ${this.appState.game.solutionWord}, ${i} ${result[i].letter}: ${result[i].guessStatus}`);
    //         }
    //         event.preventDefault();
    //     } catch (error) {
    //         alert(error);
            
    //         // expected output: ReferenceError: nonExistentFunction is not defined
    //         // Note - error messages will vary depending on browser
    //     }

    // }

    // updateRow(rowNumber, newRow) {
    //     console.log(`Updating row: ${rowNumber}`);
    //     this.boardArray[rowNumber] = newRow;
    // }

    // initializeBoard(size) {
    //     this.boardArray = new Array();
    //     for(let i = 0; i < size; i++) {
    //         this.boardArray[i] = new Array();
    //         for(let j = 0; j < size; j++) {
    //             console.log(this.solutionWord.charAt(i));
    //             this.boardArray[i][j] = new LetterService("", "blank");
    //         }
    //     }
    // }

    // initializeGame(size)
    // {
    //     // to start, select a random solution word from a small list.
    //     let words = ['this', 'that', 'pool', 'worm', 'hold', 'bold', 'sold', 'sham', 'chat', 'stop'];
    //     let solutionIndex = Math.floor(Math.random() * words.length);
    //     //this.solutionWord = words[solutionIndex];
    //     // console.log(solutionIndex);
    //     // console.log(words.length);
    //     this.solutionWord = words[solutionIndex];
    //     this.numGuesses = 0;
    //     this.maxGuesses = this.solutionWord.length - 1; //gross
    //     console.log(`Solution Word is: ${this.solutionWord}`);
    // }

    // handleGuess(guess)
    // {
    //     let result = [];
    //     console.log(`Handling guess: ${guess}`);
    //     this.numGuesses++;
    //     for(let i = 0; i < guess.length; i++)
    //     {
    //         if(guess[i] == this.solutionWord[i]) {
    //             //green
    //             result.push(new LetterService(guess[i], "correct"));
    //         }
    //         else if(this.solutionWord.includes(guess[i])) {
    //             //yellow
    //             result.push(new LetterService(guess[i], "close"));
    //         }
    //         else {
    //             //grey
    //             result.push(new LetterService(guess[i], "wrong"));
    //         }
    //     }

    //     return result;
    // }

}