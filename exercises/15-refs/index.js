import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
    };
  }

  changeName() {
    this.setState({
      first: this.textFirst.value,
      last: this.textLast.value,
    });
    console.log(`this.first.value is ${this.textFirst.value}`);
    console.log(`this.last.value is ${this.textLast.value}`);
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="first">First Name</label>
          <input
            value={this.state.first}
            onChange={ev => this.changeName(ev)}
            type="text"
            className="form-control"
            id="first"
            ref={(input) => { this.textFirst = input; }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last">Last Name</label>
          <input
            value={this.state.last}
            onChange={ev => this.changeName(ev)}
            type="text"
            className="form-control"
            id="last"
            ref={(input) => { this.textLast = input; }}
          />
        </div>
      </div>
    );
  }
}

export default User;
