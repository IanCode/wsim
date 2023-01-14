//import logo from './logo.svg';
//import './App.css';
import './styles/grid.scss';
import './styles/tile.scss';
import './styles/keyboard.scss';
import './styles/type.scss';
import './styles/variables.scss';
import './styles/flyout.scss';
import './styles/header.scss';
import Board from './components/board';
import Header from './components/header';
import Keyboard from './components/keyboard';
import NameForm from './components/nameform';
import React from 'react';
import AppState from './appstate';
import Main from './components/main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //var AppContext = React.createContext(new AppState());
    return (
        // <div className="main__grid__container">
        //   <Header />
          
        //   <Board appState={this.state.appState}/>
        //   <Keyboard appState={this.state.appState}/>
        //   <NameForm appState={this.state.appState}/>
          
        // </div>
        <Main />
    );
  }



}

export default App;
