import React , {Component} from 'react';

class Counter extends Component {
    state = {
      score: 0
    };
    incrementScore = () => {
      this.setState(prevState => ({
        score: prevState.score + 1
      }));
    };
    decrementScore = () => {
      // wrap the body of callbacl function with parentheses
      this.setState(prevState => ({
        score: prevState.score - 1
      }));
    };
    render() {
      return (
        <div className="counter">
          <button
            className="counter-action decrement"
            onClick={this.decrementScore}
          >
            -
          </button>
          <div className="counter-score">{this.state.score}</div>
          <button
            className="counter-action increment"
            onClick={this.incrementScore}
          >
            +
          </button>
        </div>
      );
    }
  }
  
  export default Counter;