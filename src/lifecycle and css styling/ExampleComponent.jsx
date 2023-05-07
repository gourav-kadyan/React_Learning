import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log('Count state updated:', this.state.count);
    }
  }

  handleButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Example Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Increment Count</button>
      </div>
    );
  }
}

export default ExampleComponent;
