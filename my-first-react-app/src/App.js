import React from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
      isClicked: false
    };

    onChange = e => {
      this.setState({
        text: e.target.value
      })
    }

    render() {
      return (
        <div>
          <h1>Input Text Below</h1>
          <input value={this.state.text} onChange={this.onChange}/>
          <App wasClicked={this.state.isClicked} />
        </div>
      )
    }
  }

function App() {
  return (
    <div >
      <button>
        
      </button>

    </div>
  );
}

export default App;
