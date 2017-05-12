import React from 'react';

class HiddenMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      label: 'Show',
      msg: 'Hello World',
    };
  }

  onClick() {
    this.setState({
      collapsed: !this.state.collapsed,
      label: this.state.collapsed ? 'Hide' : 'Show',
    });
  }

  render() {
    const style = {
      display: this.state.collapsed ? 'none' : 'block',
    };

    return (
      <div>
        <button
          type="button"
          className="btn btn-default"
          onClick={ev => this.onClick(ev)}
        >
          {this.state.label}
        </button>

        <div className="well" style={style}>
          {this.state.msg}
        </div>
      </div>
    );
  }
}

export default HiddenMessage;
