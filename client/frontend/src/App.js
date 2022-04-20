//import logo from './logo.svg';
//import './App.css';
import './styles/grid.scss';
import './styles/tile.scss';
import Board from './components/board.js';
import React from 'react';
import AppState from './appstate';

class App extends React.Component {
  render() {
    //var AppContext = React.createContext(new AppState());
    var appState = new AppState();
    return (
        <div className="main__grid__container">
          <Board size="five" appState={appState}/>
        </div>
    );
  }

}

export default App;