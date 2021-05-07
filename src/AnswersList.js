import React from 'react';

class AnswersList extends React.Component {
  render() {
    if (this.props.items && this.props.items.length > 0) {
      return (
        <div>
          <h3>Answers</h3>
          <ul>
            {this.props.items.map(item => (
              <li key={item.id}>{item.text} : {item.result}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }
}

export default AnswersList;
