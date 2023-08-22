//import logo from './logo.svg';
//import './App.css';
import './styles/base.scss';
import './styles/grid.scss';
import './styles/tile.scss';
import './styles/keyboard.scss';
import './styles/type.scss';
import './styles/variables.scss';
import './styles/flyout.scss';
import './styles/header.scss';
import './styles/modal.scss';
import './styles/button.scss';
import Header from './components/header';
import Keyboard from './components/keyboard';
import NameForm from './components/nameform';
import React from 'react';
import Main from './components/main';
import Game from './services/game';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.game = new Game(4);
  }
  render() {
    return (
        <Main game={this.game}/>
    );
  }



}

export default App;
