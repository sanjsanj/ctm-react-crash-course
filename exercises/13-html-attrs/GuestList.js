import React, { PropTypes } from 'react';
import Guest from './Guest';

class GuestList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guestList: this.props.guestList,
      guestName: '',
      guestBrings: '',
      buttonStyle: {
        validStyle: {
          backgroundColor: '#86e274',
        },
        invalidStyle: {
          backgroundColor: '',
        },
      },
    };
  }

  getButtonStyle() {
    return (this.state.guestName.length && this.state.guestBrings.length)
      ? this.state.buttonStyle.validStyle
      : this.state.buttonStyle.invalidStyle;
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
      ), this);

    return (
      <div>
        <div>
          <div className="form-group">
            <label htmlFor="Name">Name</label>
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
            <label htmlFor="Brings">Brings</label>
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
              style={this.getButtonStyle()}
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
  guestList: PropTypes.array.isRequired,
};

export default GuestList;
