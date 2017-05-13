import React from 'react';

import Guest from './Guest';

class GuestList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guestList: props.guestList,
      guestName: '',
      guestBrings: '',
    };
  }
  changeName(ev) {
    this.setState({
      guestName: ev.target.value,
    });
  }
  changeBrings(ev) {
    this.setState({
      guestBrings: ev.target.value,
    });
  }
  addGuest() {
    if (!this.state.guestName.length) return;

    this.state.guestList.push({
      name: this.state.guestName,
      brings: this.state.guestBrings,
    });

    this.setState({
      guestList: this.state.guestList,
      guestName: '',
      guestBrings: '',
    });
  }
  removeGuest(name) {
    this.setState({
      guestList: this.state.guestList.filter(guest => guest.name !== name),
    });
  }
  render() {
    const guests = this.state.guestList.map(guest => (
      <Guest
        name={guest.name}
        key={guest.name}
        onRemove={ev => this.removeGuest(ev)}
      >
        {guest.brings}
      </Guest>
      ), this,
    );

    return (
      <div>
        <div>
          <div className="form-group">
            <label>Name</label>
            <input
              value={this.state.guestName}
              onChange={ev => this.changeName(ev)}
              placeholder="Name"
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="form-group">
            <label>Brings</label>
            <input
              value={this.state.guestBrings}
              onChange={ev => this.changeBrings(ev)}
              placeholder="Brings"
              type="text"
              className="form-control"
              id="brings"
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-default"
              onClick={ev => this.addGuest(ev)}
            >
              Add
            </button>
          </div>
        </div>
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>Name</th>
              <th>Brings</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {guests}
          </tbody>
        </table>
      </div>
    );
  }
}

GuestList.propTypes = {
  guestList: React.PropTypes.array.isRequired,
};

export default GuestList;
