import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
    this.sayHello();
  };

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  render() {
    return (
      <div style={{ marginBottom: '20px' }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
