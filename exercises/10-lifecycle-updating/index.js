import React from 'react';
import timediff from 'timediff';
import raf from 'component-raf';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColon: true,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      showColon: nextProps.ms > 500,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.ms % 5) === 0;
  }

  render() {
    const colon = this.state.showColon ? ':' : ' ';

    return (
      <span>
        {this.props.s}{colon}{this.props.ms}
      </span>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      s: 0,
      ms: 0,
      start: new Date(),
    };
  }

  componentDidMount() {
    this.tock();
  }
  tock() {
    this.tick();
    raf(this.tock.bind(this));
  }
  tick() {
    const diff = timediff(this.state.start, new Date());

    this.setState({
      ms: diff.milliseconds,
      s: diff.seconds,
    });
  }
  reset() {
    this.setState({
      start: new Date(),
    });
  }

  render() {
    return (
      <div>
        <span>Elapsed time: </span><Display s={this.state.s} ms={this.state.ms} />
        <br />
        <button onClick={this.reset.bind(this)}>Reset</button>
      </div>
    );
  }
}
