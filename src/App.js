import './App.css';
import React from 'react';
import AnswersList from './AnswersList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Answers</h3>
          <AnswersList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-guess">
              Your guess?
            </label>
            <input
              id="new-guess"
              type="text"
              min="0000"
              max="9999"
              minLength="4" maxLength="4"
              pattern="\d{4}"
              size="4"
              placeholder="????"
              required={true}
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button className="App-button">
              Check #{this.state.items.length + 1}
            </button>
          </form>
        </header>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

export default App;
