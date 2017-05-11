import React from 'react';

import Guest from './Guest.js';

class GuestList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guestList: this.props.guestList,
      guestName: '',
      guestBrings: '',
      buttonStyle: {
        validStyle: {
          // TODO
        },
        invalidStyle: {
          // TODO
        }
      }
    };
  }
  changeName(ev) {
    this.setState({
      guestName: ev.target.value
    });
  }
  changeBrings(ev) {
    this.setState({
      guestBrings: ev.target.value
    });
  }
  addGuest() {
    this.state.guestList.push({
      name: this.state.guestName,
      brings: this.state.guestBrings
    });

    this.setState({
      guestList: this.state.guestList,
      guestName: '',
      guestBrings: ''
    });
  }
  removeGuest(name) {
    this.setState({
      guestList: this.state.guestList.filter(function(guest) {
        return guest.name !== name;
      })
    });
  }
  render() {
    const guests = this.state.guestList.map(function(guest) {
      return (
        <Guest
          name={guest.name}
          key={guest.name}
          onRemove={this.removeGuest.bind(this)}
        >
          {guest.brings}
        </Guest>
      );
    }, this);

    // TODO use style
    return (
      <div>
        <div>
          <div className='form-group'>
            <label>Name</label> {/* TODO add missing attr */ }
            <input
              value={this.state.guestName}
              onChange={this.changeName.bind(this)}
              placeholder='Name'
              type='text'
              className='form-control'
              id='name'
            />
          </div>
          <div className='form-group'>
            <label>Brings</label> {/* TODO add missing attr */ }
            <input
              value={this.state.guestBrings}
              onChange={this.changeBrings.bind(this)}
              placeholder='Brings'
              type='text'
              className='form-control'
              id='brings'
            />
          </div>
          <div className='form-group'>
            <button
              className='btn btn-default'
              onClick={this.addGuest.bind(this)}
            >
              Add
            </button>
          </div>
        </div>
        <table className='table table-condensed'>
          <thead>
            <tr>
               <th>Name</th>
               <th>Brings</th>
               <th></th>
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

export default GuestList;
