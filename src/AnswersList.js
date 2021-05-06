import React from 'react';

class AnswersList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
            <li key={item.id}>{item.text} : {item.result}</li>
        ))}
      </ul>
    );
  }
}

export default AnswersList;
