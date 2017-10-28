import React, { Component } from 'react';
import './App.css';
import List from './List';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      list: []
    };
  }

  onChange = event => {
    this.setState({ task: event.target.value});
  }

  onSubmit = event => {
    event.preventDefault();

    if (this.state.task !== '') {
      this.setState({
        task: '',
        list: [...this.state.list, this.state.task]
      });
    } else {
      alert('You must enter a task to add a task!');
    }
  }



  render() {  
    return (
      
      <div className="App"> 

        <form onSubmit={this.onSubmit}>
          <input value={this.state.task} onChange={this.onChange} />
          <button>Add</button>
        </form>

        <List items={this.state.list}/>
        
      </div>
    );
  }
}

export default App;
