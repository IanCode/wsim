//import logo from './logo.svg';
//import './App.css';
import './styles/grid.scss';
import './styles/tile.scss';
import './styles/keyboard.scss';
import './styles/type.scss';
import './styles/variables.scss';
import Board from './components/board';
import Header from './components/header';
import Keyboard from './components/keyboard';
import NameForm from './components/nameform';
import React from 'react';
import AppState from './appstate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {appState: new AppState()};
  }
  render() {
    //var AppContext = React.createContext(new AppState());
    //var appState = new AppState();
    return (
        <div className="main__grid__container">
          <Header />
          {/* <Game /> */}
          <Board appState={this.state.appState}/>
          <Keyboard appState={this.state.appState}/>
          <NameForm appState={this.state.appState}/>
        </div>
    );
  }



}

export default App;
