import './App.css';
import React from 'react';
import AnswersList from './AnswersList';


class App extends React.Component {

  getNumber() {
    const shuffle = (array) => {
      // Credits go to https://stackoverflow.com/a/2450976
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    const [a,b,c,d, ...rest] = shuffle([0,1,2,3,4,5,6,7,8,9]);
    return [a,b,c,d].join('');;
  }

  constructor(props) {
    super(props);
    this.state = { items: [], text: '', number: this.getNumber() };
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
              autoFocus={true}
              type="text"
              min="0000"
              max="9999"
              minLength="4"
              maxLength="4"
              pattern="^\d{4}$"
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
    if (!this.state.text.match(/^\d{4}$/)) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      result: this.getGuessResult(this.state.number, this.state.text)
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
      number: state.number
    }));
    console.log('Number:', this.state.number, newItem);
  }

  getExistingDigits(number, guess) {
    let gs = guess.split('');
    return [ ...new Set(gs)].reduce((a,b) => {
      if (number.match(b.toString())) {
        return a + 1;
      } else {
        return a;
      }
    }, 0);
  }

  getBulls(number, guess) {
    return guess.split('').reduce((a,b) => {
      const [head, ...tail] = a.s;
      return {s: tail, bulls: a.bulls + ((b === head) ? 1 : 0)};
    }, {s: number.split(''), bulls: 0}).bulls;
  }

  getGuessResult(number, guess) {
    return '' + this.getExistingDigits(number, guess) + '-' + this.getBulls(number, guess);
  }
}

export default App;
