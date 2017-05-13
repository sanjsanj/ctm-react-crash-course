import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentWillMount() {
    console.log(1, 'componentWillMount');
  }
  componentDidMount() {
    console.log(2, 'componentDidMount');
    this.interval = setInterval(this.tick.bind(this), 100);
  }
  componentWillReceiveProps() {
    console.log(3, 'componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log(4, 'shouldComponentUpdate');
    return true;
  }
  componentWillUpdate() {
    console.log(5, 'componentWillUpdate');
  }
  componentDidUpdate() {
    console.log(6, 'componentDidUpdate');
  }
  componentWillUnmount() {
    console.log(7, 'componentWillUnmount');
    clearInterval(this.interval);
  }
  tick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <span>
        Own count: {this.state.count}<br />
        Parent count: {this.props.count}
      </span>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: false,
    };
  }
  componentDidMount() {
    this.tickInterval = setInterval(this.tick.bind(this), 1000);
    this.tockInterval = setInterval(this.tock.bind(this), 500);
  }
  componentWillUnmount() {
    clearInterval(this.tickInterval);
    clearInterval(this.tockInterval);
  }
  tick() {
    this.setState({
      count: this.state.count + 1,
      show: !this.state.show,
    });
  }
  tock() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    const display = this.state.show ? (
      <Display
        count={this.state.count}
      />
    ) : '';

    return (
      <div>{display}</div>
    );
  }
}

export default App;
