import React from 'react';
import './App.css';
import { Counter } from './components/counter';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      show : false,
    }
  }
  handleShow=()=> this.setState({...this.state,show : !this.state.show})
  render(){
    return(
      <div>
        <h1>Profile</h1>
        <button onClick={this.handleShow}>{this.state.show? "Hide" : "Show"}</button>
        {
          this.state.show && <Counter/>
        }
        
      </div>
    )
  }
}

export default App;