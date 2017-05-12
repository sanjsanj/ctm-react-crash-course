import React from 'react';

import GuestList from './GuestList';
import BirthdayInfo from './BirthdayInfo';

class BirthdayContentPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Birthday Party</h1>
        <BirthdayInfo />
        <GuestList guestList={this.props.guestList} />
      </div>
    );
  }
}

export default class extends React.Component {
  render() {
    const guestList = [{
      name: 'First Person',
      brings: 'Champagne',
    }, {
      name: 'Second Person',
      brings: 'Cake',
    }, {
      name: 'Third Person',
      brings: 'Beer',
    }];

    return (
      <BirthdayContentPage
        guestList={guestList}
      />
    );
  }
}
