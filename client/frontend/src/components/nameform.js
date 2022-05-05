import React from "react";

export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.appState = props.appState;
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        try {
            var result = this.appState.game.handleGuess(this.state.value);
            //alert('A word was submitted: ' + this.state.value);
            this.appState.board.updateRow(0, result);
            //console.log(result);
            for(let i = 0; i < result.length; i++) {
                console.log(`${i} ${result[i].letter}: ${result[i].guessStatus}`);
            }
            event.preventDefault();
        } catch (error) {
            alert(error);
            
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }

    }
  
    handleSubmit2(event) {
        console.log(event);
        //alert('asdfasdfasdf');
        //localStorage.setItem('guess', this.state.guess);
        //var result = this.state.appState.game.handleGuess(event.target.value);
        //var gotten = localStorage.getItem('guess');
        //alert(gotten);
        //alert('penis');
        // console.log(result);
        // var solString = "";
        // for(let i = 0; i < solString.length; i++)
        // {
        //   solString.push(result[i].guessStatus);
        // }
        // console.log(`solString: ${solString}`);
        // alert(solString);
    }

    render() {
      return (
        <div className='test__input__grid__container'>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>

      );
    }
  }